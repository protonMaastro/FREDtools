def mergePDF(PDFFileNames, mergedPDFFileName, removeSource=False, displayInfo=False):
    """Merge multiple PDF files to a single PDF.

    The function merges multiple PDF files given as a list of
    path strings to a single PDF.

    Parameters
    ----------
    PDFFileNames : list of strings
        List of path strings to PDF files to be merged.
    mergedPDFFileName : string
        Path string where the merged PDF will be saved.
    removeSource : bool, optional
        Determine if the source PDF files should be
        removed after merge. (def. False)
    displayInfo : bool, optional
        Displays a summary of the function results. (def. False)

    Returns
    -------
    mergedPDFFileName
        Absolute path string where the merged PDF was be saved.
    """
    import fitz  # from pymupdf
    import os
    import fredtools as ft

    # check if it is a single string
    if isinstance(PDFFileNames, str):
        PDFFileNames = [PDFFileNames]

    # check if all files to be merged exist
    for PDFFileName in PDFFileNames:
        if not os.path.exists(PDFFileName):
            raise FileNotFoundError(f"The file {PDFFileName} dose not exist.")

    mergedPDF = fitz.open()

    for PDFFileName in PDFFileNames:
        with fitz.open(PDFFileName) as mfile:
            mergedPDF.insert_pdf(mfile)

    if removeSource:
        for PDFFileName in PDFFileNames:
            os.remove(PDFFileName)

    mergedPDF.save(mergedPDFFileName)

    if displayInfo:
        print(f"### {ft._currentFuncName()} ###")
        print(f"# Merged PDF files:\n# " + "\n# ".join(PDFFileNames))
        print(f"# Saved merged PDF to: ", mergedPDFFileName)
        if removeSource:
            print(f"# Removed the source PDF files")
        print("#" * len(f"### {ft._currentFuncName()} ###"))

    return os.path.abspath(mergedPDFFileName)


def getGIcmap(maxGI, N=256):
    """Get colormap for Gamma Index images.

    The function creates a colormap for Gamma Index (GI) images,
    that can be used by matplotlib.pyplot.imshow function for
    displaying 2D images. The colormap is created from 0 to
    the `maxGI` value, whereas from 0 to 1 (GI test passed) the colour
    is changing from dark blue to white, and from 1 to `maxGI` it is
    changing from light red to red.

    Parameters
    ----------
    maxGI : scalar
        Maximum value of the colormap.
    N : scalar, optional
        Number of segments of the colormap. (def. 256)

    Returns
    -------
    colormap
        An instance of matplotlib.colors.LinearSegmentedColormap object.

    See Also
    --------
        calcGammaIndex: calculate Gamma Index for two images.

    Examples
    --------
    It is assumed that the img is an image describing a slice
    of Gamma Index (GI) values calculate up to maximum value 3.
    To plot the GI map with the GI colormap:

    >>> plt.imshow(ft.arr(img), cmap=getGIcmap(maxGI=3))
    """
    from matplotlib.colors import LinearSegmentedColormap
    import numpy as np
    import warnings

    if maxGI < 1:
        warnings.warn(f"Warning: the value of the parameter 'maxGI' cannot be less than 1 and a value {maxGI} was given. It was set to 1.")
        maxGI = 1

    colorLowStart = np.array([1, 0, 128]) / 255
    colorLowEnd = np.array([253, 253, 253]) / 255
    colorHighStart = np.array([254, 193, 192]) / 255
    colorHighEnd = np.array([255, 67, 66]) / 255

    cdict = {
        "red": ((0.0, 0.0, colorLowStart[0]), (1 / maxGI, colorLowEnd[0], colorHighStart[0]), (1.0, colorHighEnd[0], 0.0)),
        "green": ((0.0, 0.0, colorLowStart[1]), (1 / maxGI, colorLowEnd[1], colorHighStart[1]), (1.0, colorHighEnd[1], 0.0)),
        "blue": ((0.0, 1.0, colorLowStart[2]), (1 / maxGI, colorLowEnd[2], colorHighStart[2]), (1.0, colorHighEnd[2], 0.0)),
    }

    cmapGI = LinearSegmentedColormap(name="GIcmap", segmentdata=cdict, N=N)

    return cmapGI


def getHistogram(dataX, dataY=None, bins=None, kind="mean", returnBinCenters=True):
    """Get histogram or differential histogram.

    The function creates a histogram data from a given dataX iterable in the defined bins.
    It is possible to generate a differential histogram where the values of the histogram
    (usually Y-axis on a plot) are a given quantity, instead of frequency of `dataX` values
    occurrance.

    Parameters
    ----------
    dataX : 1D array_like
        1D array-like iterable with the data to calculate histogram.
        For instance, it can be: a single-column pandas DataFrame,
        pandas Series, 1D numpy array, 1D list, 1D tuple etc.
    dataY : 1D array_like, optional
        1D array-like iterable with the data to calculate differential histogram.
        It must be of the same size as `dataX`. For instance, it can be: a single-column
        pandas DataFrame, pandas Series, 1D numpy array, 1D list, 1D tuple etc. (def. None)
    bins : 1D array_like, optional
        1D array-like iterable with the bins' edges to calculate histogram.
        If none, then the bins will be generated automatically between
        minimum and maximum value of `dataX` in 100 steps linearly. (def. None)
    kind : {'mean', 'sum', 'std', 'median', 'min', 'max'}, optional
        Determine the `dataY` quantity evaluation for a differential histogram.
        It can be: mean, standard deviation, median, minimum, maximum or sum
        value. (def. 'mean')
    returnBinCenters : bool, optional
        Determine if the first element of returned tuple is going to
        be the bin centres (True) or bin edges (False). (def. True)

    Returns
    -------
    Tuple of two ndarrays
        Two-element tuple of 1D numpy ndarrays, where the first element
        is a list of bin centres (or edges) and the second is a list of
        histogram values.
    """
    import numpy as np

    # check if dataX and dataY are iterable
    from collections.abc import Iterable

    if not isinstance(dataX, Iterable):
        raise TypeError(f"The variable 'dataX' is not an iterable. It must be a 1D iterable.")
    if dataY is not None and not isinstance(dataY, Iterable):
        raise TypeError(f"The variable 'dataY' is not an iterable. It must be a 1D iterable.")

    # convert dataX to ndarray if needed
    if not isinstance(dataX, np.ndarray):
        dataX = np.array(dataX).squeeze()

    # check if dataX is 1D array
    if dataX.ndim != 1:
        raise ValueError(f"The parameter 'dataX' must be a 1D iterable, e.g. a single column pandas DataFrame, 1D list or tuple, etc.")

    # convert dataY to ndarray if needed
    if dataY is not None and not isinstance(dataY, np.ndarray):
        dataY = np.array(dataY).squeeze()

    # check if dataY is 1D array
    if dataY is not None and dataY.ndim != 1:
        raise ValueError(f"The parameter 'dataY' must be a 1D iterable, e.g. a single column pandas DataFrame, 1D list or tuple, etc.")

    # check if dataY is of the same length as dataX
    if dataY is not None and len(dataX) != len(dataY):
        raise ValueError(f"The length of the 'dataY' iterable must be the same as the length of the 'dataX' iterable but they have {len(dataY)} and {len(dataX)} lengths, respectively.")

    # create bins if not given
    if bins is None:
        bins = np.linspace(np.nanmin(dataX), np.nanmax(dataX), 100)

    # validate kind parameter
    if dataY is not None and kind not in ["sum", "mean", "std", "median", "min", "max"]:
        raise ValueError(f"The value of 'kind' parameter must be 'sum', 'mean', 'std', 'median', 'min' or 'max' but '{kind}' was given.")

    # creates a histogram for dataX
    hist = list(np.histogram(dataX, bins=bins))[::-1]
    hist[0] = hist[0].astype("float")

    # creates a differential histogram if dataY is given
    if dataY is not None:
        hist[1] = hist[1].astype("float")
        for i in range(hist[0].size - 1):
            histEntry = dataY[(dataX >= hist[0][i]) & (dataX < hist[0][i + 1])]

            if not len(histEntry):
                histEntry = np.nan
            else:
                if kind == "sum":
                    histEntry = histEntry.sum()
                elif kind == "mean":
                    histEntry = histEntry.mean()
                elif kind == "std":
                    histEntry = histEntry.std()
                elif kind == "median":
                    histEntry = histEntry.median()
                elif kind == "min":
                    histEntry = histEntry.min()
                elif kind == "max":
                    histEntry = histEntry.max()
            hist[1][i] = histEntry

    # calculate bin centres instead of bin edges if requested
    if returnBinCenters:
        hist[0] = hist[0][:-1] + np.diff(hist[0]) / 2

    # convert hist[1] to float (useful for postprocessing normalistion)
    hist[1] = hist[1].astype("float")

    return hist


def pdfLandau(x, mpv, xi, amp=1):
    """Landau probability density function (PDF).

    The function generates a Landau probability density with a given most probable
    value (`mpv`), width (described with `xi`) and amplitude at `mpv`. It was adapted
    from [1]_ which was implemented based on the ROOT implementation. See [2]_ for more details.

    Parameters
    ----------
    x : scalar or array_like
        Point (or points) where to calculate the PDF.
    mpv : scalar or array_like
        Position of the most probable value (MPV) of the Landau distribution.
    xi : float or array_like
        Parameter 'xi' of the Landau distribution, it is a measure of its width.
    amp : scalar or array_like, optional
        Amplitude of the PDF at MPV. (def. 1)

    Returns
    -------
    scalar or array_like
        Single value or array of values of the Landau PDF.

    See Also
    --------
    pdfLandauGauss : generate Landau PDF convoluted with a Gaussian PDF.
    fitLandau : fit Landau distribution to data.
    fitLandauGauss : fit Landau distribution convoluted with a Gaussian to data.

    References
    ----------
    .. [1] `landaupy python package <https://pypi.org/project/landaupy/>`_
    .. [2] `landaupy package documentation <https://github.com/SengerM/landaupy>`_
    """
    from landaupy import landau

    return amp * landau.pdf(x, x_mpv=mpv, xi=xi) / landau.pdf(mpv, x_mpv=mpv, xi=xi)


def pdfLandauGauss(x, mpv, xi, sigma=0, amp=1):
    """Probability density function (PDF) of Landau convoluted with a Gaussian.

    The function generates a Landau convoluted with a Gaussian probability density with a given
    most probable value of Landau (`mpv`), width of Landau (described with `xi`), standard deviation of gaussian
    and amplitude at `mpv`. It was adapted from [3]_ which was implemented based on the ROOT implementation.
    See [4]_ for more details.

    Parameters
    ----------
    x : scalar or array_like
        Point (or points) where to calculate the PDF.
    mpv : scalar or array_like
        Position of the most probable value (MPV) of the Landau distribution.
    xi : float or array_like
        Parameter 'xi' of the Landau distribution, it is a measure of its width.
    sigma : scalar or array_like, optional
        Standard deviation of the gaussian distribution. (def. 0)
    amp : scalar or array_like, optional
        Amplitude of the PDF at MPV. (def. 1)

    Returns
    -------
    scalar or array_like
        Single value or array of values of the Landau convoluted with gaussian PDF.

    See Also
    --------
    pdfLandau : generate Landau PDF.
    fitLandau : fit Landau distribution to data.
    fitLandauGauss : fit Landau distribution convoluted with a Gaussian to data.

    References
    ----------
    .. [3] `landaupy python package <https://pypi.org/project/landaupy/>`_
    .. [4] `landaupy package documentation <https://github.com/SengerM/landaupy>`_
    """
    from landaupy import langauss

    return amp * langauss.pdf(x, landau_x_mpv=mpv, landau_xi=xi, gauss_sigma=sigma) / langauss.pdf(mpv, landau_x_mpv=mpv, landau_xi=xi, gauss_sigma=sigma)


def fitLandau(x, y, fixAmplitude=False):
    """Fit Landau distribution.

    The function fits Landau distribution to the data given as `x` and `y` values,
    using the least square algorithm.

    Parameters
    ----------
    x : array_like
        `X` values.
    y : array_like
        `Y` values.
    fixAmplitude : bool, optional
        determine if the `amp` parameter of the PDF should be used in the fiting.

    Returns
    -------
    lmfit.model.ModelResult
        Model results of the LMFit package.

    See Also
    --------
    fitLandauGauss : fit Landau distribution convoluted with a Gaussian to data.
    """
    import lmfit
    import numpy as np

    fitModel = lmfit.Model(pdfLandau)

    # calculate starting parameters
    amp0 = np.nanmax(y)
    mpv0 = x[np.where(np.array(y) == amp0)[0]][0]
    xi0 = np.sqrt(np.cov(x, aweights=y)) * 0.3

    # prepare constraints for the parameters
    fitModel.set_param_hint("mpv", min=0, max=np.inf, value=mpv0, vary=True)
    fitModel.set_param_hint("amp", min=0, max=np.inf, value=amp0, vary=not fixAmplitude)
    fitModel.set_param_hint("xi", min=1e-5, max=np.inf, value=xi0, vary=True)

    # perform fit
    fitResult = fitModel.fit(data=y, x=x)

    return fitResult


def fitLandauGauss(x, y, fixAmplitude=False):
    """Fit Landau convoluted with gaussian distribution.

    The function fits Landau convoluted with gaussian distribution
    to the data given as `x` and `y` values, using the least square algorithm.

    Parameters
    ----------
    x : array_like
        `X` values.
    y : array_like
        `Y` values.
    fixAmplitude : bool, optional
        determine if the `amp` parameter of the PDF should be used in the fiting.

    Returns
    -------
    lmfit.model.ModelResult
        Model results of the LMFit package.

    See Also
    --------
    fitLandau : fit Landau distribution to data.
    """
    import lmfit
    import numpy as np

    fitModel = lmfit.Model(pdfLandauGauss)

    # calculate starting parameters
    amp0 = np.nanmax(y)
    mpv0 = x[np.where(np.array(y) == amp0)[0]][0]
    xi0 = np.sqrt(np.cov(x, aweights=y)) * 0.3
    sigma0 = 0.1

    # prepare constraints for the parameters
    fitModel.set_param_hint("mpv", min=0, max=np.inf, value=mpv0, vary=True)
    fitModel.set_param_hint("amp", min=0, max=np.inf, value=amp0, vary=not fixAmplitude)
    fitModel.set_param_hint("xi", min=1e-5, max=np.inf, value=xi0, vary=True)
    fitModel.set_param_hint("sigma", min=0, max=np.inf, value=sigma0, vary=True)

    # perform fit
    fitResult = fitModel.fit(data=y, x=x)

    return fitResult
