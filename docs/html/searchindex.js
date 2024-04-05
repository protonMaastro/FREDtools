Search.setIndex({"docnames": ["Documentation/GettingSubimage", "Documentation/ImageAnalyse", "Documentation/ImageManipulate", "Documentation/InmAnalyse", "Documentation/ReadWrite", "Documentation/braggPeakAnalyse", "Documentation/displayImage", "Documentation/dvhAnalyse", "Documentation/gammaIndexAnalyse", "Documentation/misc", "Documentation/optimisationTools", "Documentation/simTools", "Documentation/spotAnalyse", "Introduction/Citation", "Introduction/Collaboration", "index"], "filenames": ["Documentation/GettingSubimage.rst", "Documentation/ImageAnalyse.rst", "Documentation/ImageManipulate.rst", "Documentation/InmAnalyse.rst", "Documentation/ReadWrite.rst", "Documentation/braggPeakAnalyse.rst", "Documentation/displayImage.rst", "Documentation/dvhAnalyse.rst", "Documentation/gammaIndexAnalyse.rst", "Documentation/misc.rst", "Documentation/optimisationTools.rst", "Documentation/simTools.rst", "Documentation/spotAnalyse.rst", "Introduction/Citation.rst", "Introduction/Collaboration.rst", "index.rst"], "titles": ["Getting Subimage", "Image Analyse", "Image Manipulate", "Influence Matrix Analyse", "Image Reading and Writing", "Bragg Peak Analyse", "Display Image", "DVH Analyse", "Gamma Index Analyse", "Miscellaneous", "Optimisation Tools", "Monte Carlo simulation tools", "Spot Analyse", "Citation and References", "Collaboration", "FRED tools v. 0.7.18 documentation"], "terms": {"A": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "collect": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 15], "us": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "function": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15], "read": [1, 2, 3, 7, 9, 10, 11, 15], "manipul": [3, 15], "matric": 3, "produc": [2, 3, 15], "mont": [2, 3, 4, 13, 14, 15], "carlo": [2, 3, 4, 13, 14, 15], "The": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "usual": [2, 3, 4, 6, 8, 9, 11], "3d": [0, 1, 2, 3, 4, 6, 7, 8, 10], "imag": [0, 3, 7, 8, 9, 10, 13, 15], "describ": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11], "dose": [0, 1, 3, 4, 5, 6, 7, 8, 14], "let": [1, 3], "other": [2, 3, 6, 10, 11, 15], "each": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11], "pencil": [3, 10], "beam": [2, 3, 4, 5, 10, 11, 13, 14], "therefor": [2, 3, 9, 10], "can": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 15], "treat": [2, 3, 8], "4d": [2, 3], "geometr": [2, 3, 4], "x": [0, 1, 2, 3, 6, 9, 10, 11], "y": [0, 1, 2, 3, 9, 10, 11], "z": [0, 1, 2, 3, 6, 10], "dimens": [0, 1, 2, 3, 8, 15], "Such": [2, 3], "occupi": 3, "lot": 3, "memori": 3, "most": [1, 2, 3, 9, 14, 15], "implement": [2, 3, 4, 9, 10, 12, 13, 15], "here": [2, 3, 4], "ar": [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 14, 15], "equip": 3, "occup": [2, 3, 7], "check": [1, 2, 3, 4, 11, 15], "fredtool": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15], "getdijfredvectorimag": [], "dijfilenam": [], "fno": [], "none": [2, 3, 6, 7, 8, 9, 10], "pbno": [], "returnord": [], "fals": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 15], "raisememerror": 3, "true": [0, 1, 2, 3, 4, 5, 6, 8, 9, 11], "displayinfo": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 15], "fred": [2, 3, 4, 11, 13, 14], "simpleitk": [0, 1, 2, 3, 4, 6, 7, 8, 10, 15], "vector": [0, 1, 2, 3, 5, 8, 12, 15], "object": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11], "file": [1, 2, 3, 7, 9, 11], "an": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14], "instanc": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "default": [3, 8, 15], "type": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "float32": 3, "element": [2, 3, 4, 6, 7, 9, 10], "voxel": [0, 1, 2, 3, 7, 8, 10], "singl": [1, 3, 4, 9, 10, 12], "signal": [3, 5, 6], "By": 3, "all": [0, 1, 2, 3, 4, 6, 9, 10, 11, 15], "save": [3, 4, 9, 11, 15], "user": [0, 2, 3, 9, 10], "ask": 3, "select": 3, "field": [1, 2, 3, 4, 7, 11, 14], "automat": [2, 8, 9, 11], "given": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11], "list": [1, 2, 3, 4, 5, 6, 9, 10, 11], "see": [2, 4, 5, 6, 8, 9, 10], "more": [1, 2, 4, 6, 7, 9, 10], "detail": [6, 9], "order": [0, 2, 3, 5, 11], "": [1, 2, 3], "alter": [], "from": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 15], "one": [0, 1, 4, 6, 9, 10, 15], "request": [3, 4], "It": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11], "recommend": [3, 4, 9, 11], "get": [1, 2, 3, 4, 5, 6, 8, 9, 11, 15], "option": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "return": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "size": [0, 1, 2, 3, 6, 7, 8, 9, 10, 15], "signific": [], "paramet": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "path": [2, 3, 4, 7, 9, 11], "scalar": [2, 4, 6, 7, 8, 9, 10, 11, 12, 15], "array_lik": [0, 1, 2, 3, 4, 6, 7, 9, 10, 12], "number": [1, 2, 3, 4, 7, 8, 9, 10, 11], "id": [4, 11], "def": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "bool": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15], "If": [0, 2, 4, 6, 8, 9, 10, 11, 15], "along": [0, 2, 10], "rais": [0, 3, 4, 6, 8], "error": [3, 4, 8], "expect": 3, "import": [0, 10], "arrai": [0, 1, 2, 3, 5, 9, 10, 11], "larger": [2, 3], "than": [0, 1, 2, 3, 4, 8, 9, 10, 15], "avail": [0, 2, 3, 4, 5, 9, 15], "ram": 3, "space": [1, 2, 3, 8, 9, 10], "displai": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 15], "summari": [0, 1, 2, 3, 4, 7, 8, 9, 10, 11, 15], "result": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 15], "panda": [3, 4, 9, 10, 11], "dataftam": [], "datafram": [3, 4, 9, 10, 11], "getdijfredinfo": [], "inform": [1, 2, 3, 4, 5, 7, 11], "getdijfredpoint": [], "interpol": [0, 2, 3, 5, 7, 10, 11], "valu": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12], "point": [0, 1, 2, 3, 5, 6, 9, 10], "getdijfredsumimag": [], "sum": [0, 1, 2, 3, 4, 9], "possibl": [1, 5, 9, 11], "variou": [0, 10], "combin": [], "For": [0, 2, 4, 5, 9], "2": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "just": [], "calcul": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10], "20": [5, 8], "30": 0, "40": [], "1": [0, 1, 2, 3, 4, 5, 6, 8, 9, 11, 13, 14], "3": [0, 1, 2, 3, 4, 5, 7, 9, 11], "weight": [3, 4], "unitari": [0, 1, 2, 3], "provid": [0, 2, 3, 11], "separ": [2, 4, 11], "constant": [], "100": [0, 1, 8, 9], "200": 1, "300": 1, "respect": [1, 2, 8, 9, 10, 12], "1e9": [], "1e5": [], "2e9": [], "3e9": [], "length": [0, 2, 8, 11], "must": [0, 1, 2, 3, 5, 6, 7, 9, 10, 11], "same": [0, 1, 2, 4, 7, 8, 9, 10, 11], "last": 9, "exampl": [3, 15], "common": [], "primari": 2, "In": [2, 3], "case": [2, 3], "repres": 8, "particl": [11, 14], "deliv": 3, "treatment": [4, 10, 11], "plan": [2, 4, 10, 11], "ha": [2, 3, 4, 15], "been": [2, 3, 4, 6, 15], "test": [2, 8, 9, 14], "distribut": [0, 1, 4, 6, 9, 10], "consist": [0, 1, 2, 4], "concern": [], "directli": [], "linear": [0, 2, 3, 5, 11], "nx3": 3, "iter": [1, 2, 3, 4, 5, 7, 9, 10, 12], "n": [1, 3, 9, 10, 13], "nearest": [0, 2, 3, 5, 11], "cubic": 3, "determin": [0, 2, 3, 4, 5, 7, 8, 9, 10, 11], "method": [0, 2, 3, 5, 8, 11, 12, 15], "numpi": [1, 2, 3, 8, 9, 10, 11], "shape": [1, 2, 3, 10], "nxp": [], "where": [1, 2, 3, 9, 10, 12, 14], "p": [3, 5, 13], "exploit": [2, 3, 6, 7, 8, 10], "scipi": 3, "regulargridinterpol": 3, "particular": [2, 3], "suppli": 3, "posit": [1, 2, 3, 4, 5, 9, 10, 11, 12], "center": [0, 2, 3, 4, 9], "set": [0, 2, 3, 4], "speed": 3, "up": [3, 9], "should": [0, 2, 3, 4, 7, 8, 9, 10, 11, 15], "awar": [3, 9], "usag": [2, 3], "often": 3, "some": [1, 3, 4, 11], "when": [1, 3, 4, 6, 8, 10], "multipl": [1, 3, 9], "fill": [2, 3], "zero": [0, 1, 2, 3, 4, 12], "mean": [0, 1, 2, 3, 7, 9, 15], "filter": [1, 2, 3, 15], "output": [0, 3, 11], "record": 3, "http": [2, 3, 7, 8, 13], "doc": [3, 8], "org": [3, 13], "gener": [0, 3, 6, 8, 9, 14], "html": [3, 7], "basic": [1, 2, 3, 4, 6, 14], "about": [1, 3, 4, 5, 7, 10], "0": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "7": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "6": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "lower": [0, 5, 8], "e": [0, 1, 2, 3, 4, 6, 9, 10, 13, 15], "g": [0, 1, 2, 3, 4, 6, 10, 13, 15], "slice": [0, 1, 2, 6, 9, 10], "profil": [0, 1, 5, 12, 15], "defin": [0, 1, 2, 4, 5, 7, 8, 9, 10, 11, 12], "spline": [0, 2, 5, 11], "5": [0, 2, 3, 4, 5, 6, 9, 10, 11], "getslic": [0, 6], "img": [0, 1, 2, 4, 7, 9, 10], "plane": [0, 6, 10], "xy": [0, 6], "splineord": [0, 2, 5, 11], "raisewarn": [0, 4, 6], "2d": [0, 1, 2, 4, 6, 8, 9, 10, 15], "through": [0, 6], "specifi": [0, 2], "onli": [0, 1, 2, 4, 6, 9, 10, 12, 15], "two": [0, 1, 2, 4, 5, 8, 9, 10], "ax": [0, 1, 2, 6], "differ": [0, 1, 2, 8, 9, 10, 15], "have": [0, 2, 4, 6, 8, 10, 15], "warn": [0, 2, 4, 6], "insid": [0, 1, 2, 7, 10], "extent": [0, 1, 2], "str": [0, 5, 6, 11], "string": [0, 2, 4, 6, 7, 8, 9, 10, 11], "form": [0, 1, 6, 11], "letter": 0, "xyzt": 0, "sign": [0, 1], "assum": [0, 1, 2, 9, 10], "zy": [0, 6], "yx": 0, "t": [0, 5, 13], "etc": [0, 1, 2, 4, 6, 9, 11, 15], "minu": 0, "found": [0, 4], "flip": [0, 2], "follow": [0, 2, 3, 4, 8, 9], "direct": [0, 1, 2, 10, 11], "axi": [0, 2, 6, 7, 9, 10], "thi": [0, 1, 3, 4, 5, 9, 10], "wai": 0, "matplotlib": [0, 1, 6, 9], "pyplot": [0, 1, 6, 9], "imshow": [0, 1, 6, 9], "revers": [0, 6], "int": [0, 1, 2, 4, 5, 9, 11], "rang": [0, 1, 2, 5, 8, 10, 11, 13], "getext": [0, 1], "arr": [0, 1, 9], "squeez": [0, 1, 10], "below": [0, 4, 6, 8], "show": [0, 3, 6, 9], "how": [0, 2, 7, 8, 10], "zx": 0, "img3d": 0, "readmhd": [0, 1, 4], "imagect": 0, "mhd": [0, 1, 15], "dim": [0, 1], "xyz": [0, 1, 4], "511": [0, 1], "415": [0, 1], "218": [0, 1], "pixel": [0, 1, 2], "mm": [0, 1, 2, 8], "68359375": [0, 1], "origin": [0, 1, 2, 4, 5, 9], "174": [0, 1], "65820312": [0, 1], "354": [0, 1], "28710938": [0, 1], "785": [0, 1], "spatial": [0, 1], "centr": [0, 1, 6, 9, 12], "658203": [0, 1], "173": [0, 1], "974609": [0, 1], "291016": [0, 1], "287109": [0, 1], "353": [0, 1], "603516": [0, 1], "71": [0, 1], "962891": [0, 1], "279297": [0, 1], "600000": [0, 1], "784": [0, 1], "400000": [0, 1], "526": [0, 1], "525": [0, 1], "200000": [0, 1], "175": [0, 1], "000000": [0, 1], "316406": [0, 1], "349": [0, 1], "628906": [0, 1], "70": [0, 1, 3], "937500": [0, 1], "283": [0, 1], "691406": [0, 1], "786": [0, 1], "524": [0, 1], "261": [0, 1], "volum": [0, 1, 7, 11], "25924053": [0, 1], "15": [0, 1, 6], "mm3": 0, "25": [0, 1, 2], "92": [0, 1, 2], "litr": 0, "data": [0, 1, 3, 4, 5, 6, 9, 11], "16": [0, 1, 4], "bit": [0, 1, 4], "integ": [0, 1, 2, 4, 8, 9], "1024": [0, 1, 2], "3071": [0, 1], "33870013138": [0, 1], "732": [0, 1], "6387321958799": [0, 1], "468": [0, 1], "4351806663016": [0, 1], "non": [0, 1], "46188861": [0, 1], "99": [0, 1, 2, 3], "91": [0, 1], "90": [0, 1], "air": [0, 1], "hu": [0, 1, 2, 10], "1000": [0, 1, 2], "15065800": [0, 1], "32": [0, 1], "59": [0, 1], "8": [0, 1, 5, 6, 13], "45": [0, 1], "sl2d": 0, "212": 0, "42": 0, "654": 0, "420000": 0, "761797": 0, "078203": 0, "683594": 0, "62467": 0, "60": 0, "06": 0, "1803": 0, "53645122": 0, "481": 0, "56270310059426": 0, "559": 0, "2583473799535": 0, "111051": 0, "69": 0, "57831": 0, "51": [0, 2, 8], "03": 0, "getextmpl": [0, 1], "xlabel": 0, "ylabel": 0, "getprofil": 0, "1d": [0, 1, 4, 9, 15], "plot": [0, 1, 5, 6, 9], "po": [0, 1, 5, 12], "vec": [0, 1, 5, 12], "pr1d": 0, "27929688": 0, "800000": 0, "341797": 0, "655": 0, "232": 0, "72": 0, "00": 0, "1023": 0, "1336": 0, "131818": 0, "317": 0, "63373493975905": 0, "487": 0, "9811134201045": 0, "414": 0, "76": [0, 2], "85": 0, "getpoint": 0, "equal": [0, 1, 2, 8, 10], "pointvalu": 0, "56": [0, 1, 2], "ft": [0, 9], "dtype": [0, 3], "int16": [0, 4], "37": 0, "43": 0, "getinteg": 0, "integr": 0, "multipli": [0, 4], "routin": [0, 1, 2, 4, 7, 9, 10, 13, 15], "depth": [0, 4, 5], "idd": 0, "in1d": 0, "31640625": 0, "46800622e": 0, "09": [0, 2], "54287109e": 0, "02": 0, "85000000e": 0, "1468006225": 0, "1468006050": 0, "1468006399": 0, "915": 0, "64": [0, 2], "float": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10], "91384297": 0, "26562846": 0, "43597831": 0, "757814154": 0, "27783995152": 0, "26668": 0, "66949385": 0, "90907634": 0, "17496118": 0, "62771702": 0, "per": 0, "analysi": [1, 5, 7, 8, 12, 15], "coordin": [1, 2, 4, 10], "side": [1, 5], "border": 1, "system": [1, 4, 13], "tupl": [1, 2, 4, 9], "xmin": 1, "xmax": 1, "ymin": 1, "ymax": 1, "format": [1, 3, 10, 11, 15], "getsiz": 1, "absolut": [1, 4, 5, 8, 9], "xsize": 1, "ysize": 1, "getimagecent": 1, "xcenter": 1, "ycenter": 1, "getmasscent": 1, "mass": [1, 6], "getmaxposit": 1, "maximum": [1, 5, 6, 8, 9, 10, 12], "getminposit": 1, "minimum": [1, 2, 8, 9, 10], "xmasscent": 1, "ymasscent": 1, "xposit": 1, "yposit": 1, "getvoxelcentr": 1, "x0": 1, "x1": 1, "y0": 1, "y1": 1, "displayimageinfo": 1, "imgct": 1, "ct": [1, 2, 4, 6, 10], "mm\u00b3": 1, "l": [1, 13], "ul": 1, "addit": [1, 10, 11], "metadata": 1, "modul": [1, 7], "left": 1, "right": 1, "bottom": 1, "top": 1, "which": [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 15], "line": [1, 9, 11, 15], "100x300": 1, "px": [1, 2], "real": [1, 9], "ispointinsid": 1, "match": [1, 2, 9], "consid": [1, 2], "boolean": 1, "9": [1, 2], "expand": 1, "600": 1, "getstatist": 1, "statist": [1, 8, 11], "wrapper": [1, 2, 6], "statisticsimagefilt": 1, "execut": [1, 8], "like": [1, 2, 3, 9, 10, 11, 12, 15], "standard": [1, 4, 9, 11], "deviat": [1, 9], "stat": 1, "getmean": 1, "getsigma": 1, "4351857326367": 1, "getsum": 1, "compareimgfor": 1, "img1": 1, "img2": 1, "decim": 1, "compar": 1, "frame": [1, 2, 4], "refer": [1, 2, 7, 10, 15], "round": [1, 2], "sens": 1, "those": [1, 3, 6], "greater": [1, 8], "so": [1, 10], "658203125": 1, "974609375": 1, "chang": [2, 3, 9, 13], "mostli": 2, "registr": [2, 15], "mapstructtoimg": [2, 7], "rsfilenam": [2, 7], "structnam": [2, 7], "binarymask": 2, "areafract": 2, "cpuno": [2, 7, 8, 9, 10], "auto": [2, 7, 8, 9, 10], "map": [2, 6, 7, 8, 9, 10], "structur": [2, 4, 7, 11], "creat": [2, 4, 6, 9, 10, 11], "mask": [2, 6, 7, 10], "r": [2, 4, 5, 7, 9, 13], "dicom": [2, 7, 11, 15], "contour": [2, 6, 10], "outsid": 2, "its": [2, 4, 9, 11], "fraction": [2, 4, 6, 7, 8, 12], "doe": [2, 4, 9, 10], "name": [2, 4, 6, 7, 11], "binari": [2, 3, 7, 10], "product": 2, "area": 2, "multiprocess": [2, 7, 8, 9, 10], "mani": [2, 7, 8, 10], "core": [2, 7, 8, 9, 10], "o": [2, 7, 8, 10], "cpu_count": [2, 7, 8, 10], "cpu": [2, 7, 8, 9, 10], "cropimgtomask": 2, "crop": 2, "boundari": 2, "getdvhmask": [2, 7], "dvh": [2, 15], "gatetool": 2, "packag": [2, 9], "turn": 2, "out": [2, 3, 11], "hole": 2, "detach": 2, "new": [2, 14, 15], "approach": 2, "done": [2, 8, 10], "base": [1, 2, 5, 8, 9, 10], "cw": 2, "ccw": 2, "inclus": 2, "exclus": 2, "input": [2, 5, 8, 11], "distanc": [2, 5, 8, 10], "take": 2, "account": 2, "gap": 2, "bound": 2, "enlarg": 2, "sliceaddno": 2, "resampl": [2, 7], "fact": 2, "appli": [2, 14, 15], "becaus": [2, 15], "floatingtobinarymask": 2, "imgmask": [2, 7, 10], "threshold": 2, "convert": [1, 2, 4, 9, 10, 11], "extrem": 2, "abov": [2, 4], "setvaluemask": 2, "simpl": [2, 5, 6, 15], "resampleimg": [2, 7], "assumpt": 2, "low": 2, "corner": 2, "first": [2, 4, 9, 10], "preserv": 2, "fit": [2, 5, 9, 10, 12], "sumimg": 2, "sumvectorimg": 2, "createcylindricalmask": [], "startpoint": 2, "endpoint": 2, "cylindr": 2, "height": [2, 6], "start": [2, 9, 10, 15], "end": [2, 9], "cylind": 2, "support": [2, 4, 13], "might": [2, 3, 9, 10], "help": [2, 3, 15], "make": 2, "accept": 2, "correct": [2, 4], "chamber": 2, "bragg": [2, 15], "peak": [2, 15], "measur": [2, 4, 9], "wa": [2, 4, 8, 9], "adapt": [2, 9], "github": [2, 15], "repositori": [2, 15], "com": [2, 8], "heydude1337": 2, "simplephantomtoolkit": 2, "second": [2, 9, 10], "uint8": 2, "getimgbev": 2, "isocentreposit": 2, "gantryangl": 2, "couchangl": 2, "defaultpixelvalu": 2, "transform": [1, 2], "ey": 2, "view": 2, "bev": 2, "isocentr": [2, 10], "gantri": 2, "angl": 2, "couch": 2, "rotat": 2, "FOR": 2, "rel": [2, 5], "definit": 2, "3x1": 2, "around": 2, "deg": 2, "workflow": 2, "translat": 2, "deliveri": [2, 11], "sequenc": 2, "rtplan": 2, "neg": 2, "rn": [2, 4, 11], "setidentitydirect": 2, "ident": 2, "overwritectphysicalproperti": 2, "centreinsid": [], "algorithm": [7, 9, 10], "smparallel": [], "relelecdenscalib": 2, "6000": [], "532": [], "hurang": 2, "2000": 2, "50000": 2, "overwrit": [2, 4, 11], "physic": [1, 2, 5, 13, 14], "properti": [2, 4, 5], "search": [2, 4, 8, 9], "replac": 2, "hounsfield": 2, "unit": [2, 8, 10], "electron": [2, 14], "densiti": [2, 9, 11], "rel_elec_dens": 2, "now": [2, 12], "calibr": 2, "wherea": [2, 9, 10, 11], "miss": [2, 10], "linearli": [2, 9, 10], "allinsid": [], "2xn": 2, "between": [2, 5, 9, 10], "column": [2, 3, 9, 10, 11], "would": 2, "polynomi": 2, "advis": 2, "explicitli": 2, "skip": 2, "920": [], "deriv": 2, "within": 2, "includ": [2, 3, 4, 6, 8, 9, 10, 11, 14], "overwritten": [2, 11], "No": 2, "addmargintomask": 2, "marginlater": 2, "marginproxim": 2, "margindist": 2, "lateralkerneltyp": 2, "circular": 2, "add": [2, 15], "later": 2, "proxim": [2, 5], "distal": [2, 5], "margin": 2, "respons": [2, 14], "box": 2, "cross": 2, "kernel": 2, "dilat": 2, "dilut": 2, "doubl": 4, "raw": 4, "obsol": 4, "engin": [4, 8, 11, 14], "proton": [4, 5, 11, 13, 14], "rp": 4, "filenam": [3, 4, 9, 11], "readimag": 4, "writemhd": 4, "filepath": 4, "singlefil": 4, "usecompress": 4, "compressionlevel": 4, "extend": 4, "writeimag": 4, "also": [6, 10], "instead": [4, 9], "extens": [4, 11], "exist": [4, 6, 11, 15], "otherwis": 4, "compress": 4, "unsign": 4, "level": [4, 5, 10], "10": [4, 8, 13], "ani": [1, 2, 4, 6, 11, 15], "effect": 4, "convertmhdtosinglefil": 4, "convertmhdtodoublefil": 4, "obsolet": 4, "store": 4, "readmap3d": 4, "maintain": 4, "compat": 4, "writemap3d": 4, "getdicomtypenam": 4, "dicomvar": 4, "tag": 4, "sop": 4, "class": [3, 4, 5, 6, 7, 9, 12, 15], "uid": 4, "descript": [2, 4, 10, 11], "pydicom": 4, "read_fil": 4, "sortdicom": 4, "sort": 4, "folder": [4, 11], "searchfold": 4, "recurs": 4, "rd": 4, "unknown": 4, "subfold": 4, "storag": [4, 14], "enhanc": 4, "legaci": 4, "rt": 4, "ion": 4, "were": 4, "recogn": [4, 8], "dictionari": [4, 8, 11], "dict": [4, 5, 8, 11], "getrnmachinenam": 4, "machin": [4, 10, 11], "retriev": [4, 9], "getrnfield": 4, "getrnspot": 4, "spot": [4, 10, 13, 15], "getrninfo": 4, "getrnisocent": 4, "isocent": [4, 10], "rnfilenam": [4, 11], "doseprescrib": [4, 7], "prescrib": 4, "target": [4, 7, 10, 14], "fractionno": 4, "targetstructnam": 4, "prepar": [4, 7, 14, 15], "work": [1, 3, 4, 6, 15], "planlabel": 4, "empti": [4, 9], "anonym": 4, "plandat": 4, "date": 4, "creation": 4, "plantim": 4, "time": [4, 8], "patientnam": 4, "patient": [4, 13], "patientbirthd": 4, "birth": 4, "patientid": 4, "manufactur": 4, "softwarevers": 4, "version": [3, 4, 11, 14, 15], "stationnam": 4, "station": 4, "machinenam": 4, "totalfieldsnumb": 4, "total": 4, "setup": [4, 8], "treatmentfieldsnumb": 4, "setupfieldsnumb": 4, "otherfieldsnumb": 4, "targetprescriptiondos": 4, "dosereferencesequ": 4, "beamdos": 4, "fractiongroupsequ": 4, "referencedbeamsequ": 4, "perform": [4, 5, 7, 8, 12], "written": [4, 15], "fail": [4, 8], "meterset": 4, "getrsinfo": 4, "getexternalnam": 4, "extern": [4, 8], "getct": 4, "seri": [4, 9], "come": 4, "sitk": 4, "sitkint16": 4, "braggpeak": 5, "accuraci": 5, "01": [5, 7], "offset": [5, 8], "bortcut": 5, "curv": 5, "hold": [5, 7], "bp": 5, "made": 5, "bortfeld": 5, "equat": [2, 5], "taken": 5, "eq": 5, "27": 5, "obtain": 5, "percent": [5, 8], "fall": [2, 5, 8], "off": [2, 5, 6], "width": [5, 6, 9, 10], "region": [5, 11], "jupyt": [5, 6, 8], "notebook": [5, 6, 8], "analyt": 5, "approxim": 5, "therapeut": 5, "med": 5, "phy": [5, 13], "24": 5, "2024": 5, "1997": 5, "tutori": [5, 6, 8], "bortfeldfit": 5, "model": [5, 9, 11, 12, 14], "lmfit": [5, 9, 12], "modelresult": [5, 9, 12], "bortfeldfitparam": 5, "load": 5, "bpbort": 5, "bpinterp": 5, "getdbort": 5, "getrbort": 5, "d": [1, 5, 11, 13], "getdfobort": 5, "dup": 5, "dlow": 5, "percentd": 5, "upper": 5, "80": 5, "equival": [5, 10], "code": [5, 8, 13, 14], "getdfointerp": 5, "getrinterp": 5, "getdinterp": 5, "part": 5, "50": [5, 8], "getwbort": 5, "getwinterp": 5, "design": [6, 14], "quickli": 6, "analys": [6, 15], "quantiti": [6, 9], "inlcud": 6, "interact": 6, "mode": [6, 7, 8], "showslic": 6, "imgback": 6, "imgfront": 6, "cmapback": 6, "bone": 6, "cmapfront": 6, "jet": 6, "alphafront": 6, "imgroi": 6, "vmaxback": 6, "vmaxfront": 6, "showlegend": 6, "fontsiz": 6, "front": [6, 13], "anoth": 6, "go": [6, 9], "overlap": 6, "background": 6, "allow": 6, "quick": 6, "At": [6, 11], "least": [3, 6, 9, 10, 11], "variabl": 6, "axessubplot": 6, "foreground": 6, "color": [6, 9], "colormap": [6, 9], "alpha": [6, 11], "pf": 6, "transpar": 6, "legend": 6, "roi": 6, "thei": [6, 12, 15], "font": 6, "tick": 6, "label": 6, "attach": 6, "axesimag": 6, "three": 6, "project": [6, 15], "dcofront": 6, "figsiz": 6, "figur": 6, "ipywidget": 6, "move": [6, 10], "mous": 6, "well": [6, 9, 14], "button": 6, "press": 6, "featur": 6, "shift": [6, 10, 13], "gamma": [6, 9, 15], "index": [1, 6, 7, 9, 15], "cut": 6, "inch": 6, "ipwidget": 6, "histogram": [7, 9], "doselevelstep": 7, "FoR": [1, 7], "dicompylercor": 7, "dicompyl": 7, "readthedoc": 7, "io": 7, "en": 7, "latest": 7, "prescript": 7, "bin": [7, 9], "getdvhstruct": 7, "befor": 7, "increas": 7, "resolut": 7, "while": 7, "assign": 7, "special": 7, "gi": [8, 9], "c": [3, 8, 11, 13], "share": 8, "librari": [8, 9], "still": [3, 8], "develop": [3, 8, 14], "valid": [8, 9, 11, 14], "calcgammaindex": [8, 9], "imgref": 8, "imgev": 8, "dd": 8, "dta": 8, "dco": 8, "ddtype": 8, "local": 8, "globalnorm": 8, "stepsiz": 8, "fractionalsteps": 8, "evalu": [8, 9], "agreement": 8, "global": 8, "exclud": 8, "pass": [8, 9, 10], "rate": 8, "compli": 8, "linux": 8, "angelo": [8, 14], "schiavi": [8, 13, 14], "against": 8, "pymedphi": 8, "python": [8, 9, 15], "cutoff": 8, "criterion": 8, "normalis": 8, "step": [8, 9, 11], "runtimeerror": 8, "run": [8, 11], "21": 8, "nan": [2, 8, 11], "22": [8, 13], "inf": 8, "29": 8, "null": 8, "pointer": 8, "illdefin": 8, "52": 8, "53": 8, "comput": [8, 10], "ongo": 8, "101": 8, "complet": 8, "102": 8, "criteria": 8, "103": 8, "ref": 8, "104": 8, "eval": 8, "105": 8, "getgistat": 8, "imggi": 8, "categori": 9, "re_numb": [], "ee": [], "bytes_or_buff": [], "encod": 11, "expos": [], "buffer": [], "decod": [], "handler": [], "__str__": [], "repr": [], "sy": [], "getdefaultencod": [], "strict": [], "mergepdf": 9, "pdffilenam": 9, "mergedpdffilenam": 9, "removesourc": 9, "merg": 9, "pdf": 9, "sourc": [9, 10], "remov": [4, 9, 10, 11], "after": [9, 11], "getgicmap": 9, "maxgi": 9, "256": 9, "colour": [], "dark": 9, "blue": 9, "white": 9, "light": 9, "red": 9, "segment": 9, "linearsegmentedcolormap": 9, "To": [9, 15], "plt": 9, "cmap": 9, "gethistogram": 9, "datax": 9, "datai": 9, "kind": 9, "returnbincent": 9, "differenti": 9, "frequenc": 9, "occurr": 9, "edg": [1, 2, 9], "std": 9, "median": 9, "min": 9, "max": 9, "ndarrai": 9, "pdflandau": 9, "mpv": 9, "xi": 9, "amp": 9, "landau": 9, "probabl": 9, "amplitud": [9, 12], "root": [9, 11], "fitlandau": 9, "landaupi": 9, "document": 9, "pdflandaugauss": 9, "sigma": [2, 9], "convolut": 9, "gaussian": [2, 9, 12], "4": [2, 9], "fitlandaugauss": 9, "whole": 9, "gauss": 9, "pdfvavilov": 9, "kappa": 9, "beta": [9, 11], "scale": [9, 11], "vavilov": 9, "pyamtrack": 9, "adopt": 9, "nevertheless": 9, "energi": [9, 10, 11, 14], "wrong": 9, "factor": [9, 11], "fitvavilov": 9, "fixamplitud": [9, 12], "squar": [9, 11], "fite": [], "beta0": 9, "kappa0": 9, "scaling0": 9, "sensit": 9, "initi": 9, "alwai": 9, "need": [9, 15], "less": 9, "sigma2fwhm": 9, "fwhm": 9, "recalcul": [4, 9, 11], "full": [9, 11], "half": [9, 10], "fwhm2sigma": 9, "optimisebeamposit": 10, "contourpolygon": 10, "spotdist": 10, "regular": [9, 10], "kwarg": 10, "optim": 10, "polygon": 10, "section": [10, 14], "nomin": [10, 11], "depend": 10, "neighbor": 10, "hexagon": 10, "concentr": 10, "delaunai": 10, "far": 10, "keyword": 10, "arg": 10, "nx2": 10, "optimisebeampositionsregular": 10, "grid": 10, "optimisebeampositionshexagon": 10, "place": 10, "central": 10, "centroid": 10, "align": [3, 10], "faster": 10, "scan": [4, 10, 13], "everi": [1, 10], "row": [9, 10], "choos": 10, "setfieldsfolderstruct": 11, "folderpath": 11, "foldernam": 11, "1_field2": 11, "2_field3": 11, "3_field1": 11, "begin": 11, "readfredstat": 11, "filenamelogout": 11, "logfil": 11, "log": 11, "writebeammodel": 11, "beammodel": 11, "write": [11, 15], "yaml": 11, "kei": 11, "bm": 11, "creationd": 11, "requir": 11, "ad": 11, "energet": 11, "propag": 11, "nomenergi": [10, 11], "spread": 11, "denergi": 11, "dosimetr": 11, "mu": 11, "scalingfactor": 11, "optic": 11, "epsilon": 11, "emitt": 11, "alphax": 11, "betax": 11, "epsilonx": 11, "alphai": 11, "betai": 11, "epsiloni": 11, "rangeshift": [], "shifter": 11, "thick": [10, 11], "meteri": [], "materi": 11, "composit": 11, "nice": 11, "tabl": 11, "readbeammodel": 11, "interpolatebeammodel": 11, "kai": 11, "csv": 11, "getfredvers": 11, "instal": 11, "varion": 11, "checkfredvers": 11, "runfr": 11, "fredinpfilenam": 11, "param": 11, "call": 11, "inp": 11, "current": 11, "v5": 11, "nogpu": 11, "subprocess": 11, "stdout": 11, "readgate_hitsactor": 11, "gate": [11, 13], "hit": 11, "activ": [11, 14], "pickl": 11, "npy": 11, "them": 11, "renam": 11, "cm": 11, "edep": [3, 11], "deposit": [11, 14], "mev": 11, "pdgcode": 11, "pdg": 11, "scheme": [11, 14], "readgatestat": 11, "actor": 11, "manual": 11, "fitspotprofil": 12, "cutlevel": 12, "fixcentretozero": 12, "singlegauss": 12, "1xn": 12, "correcpond": 12, "fix": 12, "do": 12, "tool": [13, 14], "pleas": 13, "gajewski": [13, 14], "j": 13, "garbacz": 13, "m": 13, "czerska": 13, "k": 13, "durant": 13, "krah": 13, "krzempek": 13, "kope\u0107": 13, "lin": 13, "moj\u017ceszek": 13, "patera": 13, "v": [3, 13], "pawlik": 13, "niedzwiecka": 13, "rinaldi": 13, "rydygi": 13, "pluta": 13, "scifoni": 13, "skrzypek": 13, "tommasino": 13, "f": 13, "rucinski": 13, "commiss": 13, "gpu": 13, "acceler": [13, 14], "clinic": 13, "applic": [13, 14, 15], "therapi": [13, 14], "403": 13, "2021": 13, "doi": 13, "3389": 13, "fphy": 13, "2020": 13, "567300": 13, "vilch": 13, "freixa": 13, "compact": 13, "14": 13, "578605": 13, "bori": 13, "baran": 13, "brzezi\u0144ski": 13, "chug": 13, "coussat": 13, "czerwi\u0144ski": 13, "dadgar": 13, "dulski": 13, "eliyan": 13, "gajo": 13, "kacprzak": 13, "kap\u0142on": 13, "\u0142": 13, "klimaszewski": 13, "konieczka": 13, "korcyl": 13, "kozik": 13, "krzemie\u0144": 13, "w": 13, "protheramon": 13, "simul": [13, 14, 15], "framework": 13, "monitor": 13, "pet": [4, 13], "medicin": 13, "biologi": 13, "2022": 13, "67": 13, "1088": 13, "1361": 13, "6560": 13, "ac944c": 13, "jan": 14, "institut": 14, "nuclear": 14, "polish": 14, "academi": 14, "scienc": 14, "krak\u00f3w": 14, "poland": 14, "main": 14, "qualiti": 14, "assur": 14, "research": 14, "radiotherapi": 14, "configur": 14, "specif": [14, 15], "facil": 14, "depart": 14, "sapienza": 14, "univers": 14, "rome": 14, "itali": 14, "istituto": 14, "nazional": 14, "di": 14, "fisica": 14, "infn": 14, "he": 14, "physicist": 14, "specialis": 14, "numer": [2, 3, 14], "associ": 14, "professor": 14, "teach": 14, "undergradu": 14, "cours": 14, "plasma": 14, "modern": 14, "master": 14, "optimis": [14, 15], "cancer": 14, "charg": 14, "studi": [13, 14], "gain": 14, "robust": 14, "capsul": 14, "implos": 14, "shock": 14, "ignit": 14, "inerti": 14, "confin": 14, "fusion": 14, "transport": 14, "fast": 14, "dens": 14, "hot": 14, "advanc": 14, "diagnost": 14, "bunch": 14, "instabl": 14, "linac": 14, "ring": 14, "metaimag": 15, "mha": 15, "understood": 15, "5d": 15, "process": 15, "smallest": 15, "argument": 15, "ifj": 15, "edu": 15, "pl": 15, "stabl": 15, "via": 15, "pip": 15, "updat": 15, "upgrad": 15, "git": 15, "clone": 15, "jasq": 15, "everyon": 15, "invit": 15, "accord": 15, "numpydoc": 15, "style": 15, "napoleon": 15, "websit": 15, "guid": 15, "restructuredtext": 15, "build": 15, "sphinx": 15, "sphinx_rtd_them": 15, "templat": 15, "collabor": 15, "citat": 15, "dij": [], "influenc": 15, "matrix": 15, "subimag": 15, "miscellan": 15, "positron": 4, "emiss": 4, "tomographi": [4, 10], "contain": [4, 10, 11], "getpet": 4, "suv": 4, "uptak": 4, "getrd": 4, "getrdfilenameforfieldnumb": 4, "fieldnumb": 4, "find": [4, 10], "getcpuno": 9, "util": 9, "addition": 11, "_": [], "readgate_psactor": 11, "777": 2, "82": 2, "495": 2, "34": 2, "96": 2, "39": 2, "87": 2, "226": 2, "05": 2, "857": 2, "65": 2, "1313": 2, "8513": 2, "12668": 2, "25332": 2, "19": 2, "489": 2, "949": 2, "976": 2, "043": 2, "053": 2, "117": 2, "456": 2, "696": 2, "58": 2, "190": 2, "readopg": 4, "opg": 4, "omnipro": 4, "softwar": 4, "export": 4, "iba": 4, "brzezinski": 13, "kopec": 13, "detect": 13, "scanner": 13, "2023": 13, "68": 13, "145016": 13, "acdd4c": 13, "transformindextophysicalpoint": 1, "indic": 1, "nxd": 1, "int64": 1, "uint16": 1, "transformcontinuousindextophysicalpoint": 1, "transformphysicalpointtoindex": 1, "transformphysicalpointtocontinuousindex": 1, "continu": 1, "getvoxeledg": 1, "anonymizedicom": 4, "removeprivatetag": 4, "privat": 4, "had": 3, "previou": 3, "old": 3, "contact": 3, "createconemask": 2, "startradiu": 2, "endradiu": 2, "createellipsemask": 2, "radii": 2, "ellips": 2, "createcylindermask": 2, "cone": 2, "radiou": 2, "getlinefromfil": 9, "pattern": 9, "startlin": 9, "removeeol": 9, "comment": 9, "asci": 9, "express": 9, "strung": 9, "lead": 9, "reach": [2, 9], "oper": 9, "unavail": 11, "ft_optimis": 10, "convertcttow": 10, "wer": 10, "houndsfield": 10, "water": 10, "ratio": [3, 10], "convers": 10, "calcwetfromw": 10, "wet": 10, "imgwer": 10, "sad": 10, "virtual": 10, "locat": 10, "partucullarli": 10, "te": 10, "rai": 10, "deflect": 10, "whether": 10, "generateisolay": 10, "minrang": 10, "maxrang": 10, "beamparam": 10, "isowet": [], "layer": 10, "correspond": 10, "iso": 10, "predefin": 10, "rangeprox": 10, "rangedist": 10, "calccontour": 10, "third": 10, "convertraytargettoisoplan": 10, "raytarget": 10, "positon": 10, "3xn": 10, "goe": 10, "11": [], "13": [], "np": 11, "getinmfredsumimag": 3, "inminfo": 3, "inm": 3, "info": 3, "pbid": 3, "fid": 3, "desir": 3, "uint32": 3, "float64": 3, "getinmfredinfo": 3, "getinmfredpoint": 3, "getinmfredvectorimag": 3, "cxpxn": 3, "compon": 3, "dimension": 3, "understand": 3, "scorer": 3, "letd": 3, "denomin": [2, 3], "imgdivid": 2, "imgnum": 2, "imgden": 2, "divid": 2, "both": 2, "quotient": 2, "getcumsum": 0, "cumul": 0, "18": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "addgaussmargintomask": 2, "gausssigma": 2, "fractionatedg": 2, "edgedist": 2, "slope": 2, "web": 2, "page": 2, "addexpmargintomask": 2, "exponenti": 2, "expon": 2, "cdot": 2, "apertur": 11, "depreci": 11, "favor": 11, "item": 11, "bracket": 11, "sigma_": [], "signeddanielssondistancemap": 2, "you": 15, "want": 15, "our": 15, "bui": 15, "coffe": 15, "click": 15, "caption": [], "paragraph": []}, "objects": {"fredtools": [[2, 0, 1, "", "addExpMarginToMask"], [2, 0, 1, "", "addGaussMarginToMask"], [2, 0, 1, "", "addMarginToMask"], [4, 0, 1, "", "anonymizeDicoms"], [1, 0, 1, "", "arr"], [5, 1, 1, "", "braggPeak"], [8, 0, 1, "", "calcGammaIndex"], [11, 0, 1, "", "checkFREDVersion"], [1, 0, 1, "", "compareImgFoR"], [4, 0, 1, "", "convertMHDtoDoubleFiles"], [4, 0, 1, "", "convertMHDtoSingleFile"], [2, 0, 1, "", "createConeMask"], [2, 0, 1, "", "createCylinderMask"], [2, 0, 1, "", "createEllipseMask"], [2, 0, 1, "", "cropImgToMask"], [1, 0, 1, "", "displayImageInfo"], [9, 0, 1, "", "fitLandau"], [9, 0, 1, "", "fitLandauGauss"], [12, 0, 1, "", "fitSpotProfile"], [9, 0, 1, "", "fitVavilov"], [2, 0, 1, "", "floatingToBinaryMask"], [9, 0, 1, "", "fwhm2sigma"], [9, 0, 1, "", "getCPUNo"], [4, 0, 1, "", "getCT"], [0, 0, 1, "", "getCumSum"], [7, 0, 1, "", "getDVHMask"], [7, 0, 1, "", "getDVHStruct"], [4, 0, 1, "", "getDicomTypeName"], [1, 0, 1, "", "getExtMpl"], [1, 0, 1, "", "getExtent"], [4, 0, 1, "", "getExternalName"], [11, 0, 1, "", "getFREDVersion"], [11, 0, 1, "", "getFREDVersions"], [9, 0, 1, "", "getGIcmap"], [8, 0, 1, "", "getGIstat"], [9, 0, 1, "", "getHistogram"], [1, 0, 1, "", "getImageCenter"], [2, 0, 1, "", "getImgBEV"], [3, 0, 1, "", "getInmFREDInfo"], [3, 0, 1, "", "getInmFREDPoint"], [3, 0, 1, "", "getInmFREDSumImage"], [0, 0, 1, "", "getInteg"], [9, 0, 1, "", "getLineFromFile"], [1, 0, 1, "", "getMassCenter"], [1, 0, 1, "", "getMaxPosition"], [1, 0, 1, "", "getMinPosition"], [4, 0, 1, "", "getPET"], [0, 0, 1, "", "getPoint"], [0, 0, 1, "", "getProfile"], [4, 0, 1, "", "getRD"], [4, 0, 1, "", "getRDFileNameForFieldNumber"], [4, 0, 1, "", "getRNFields"], [4, 0, 1, "", "getRNInfo"], [4, 0, 1, "", "getRNIsocenter"], [4, 0, 1, "", "getRNMachineName"], [4, 0, 1, "", "getRNSpots"], [4, 0, 1, "", "getRSInfo"], [1, 0, 1, "", "getSize"], [0, 0, 1, "", "getSlice"], [1, 0, 1, "", "getStatistics"], [1, 0, 1, "", "getVoxelCentres"], [1, 0, 1, "", "getVoxelEdges"], [2, 0, 1, "", "imgDivide"], [11, 0, 1, "", "interpolateBeamModel"], [1, 0, 1, "", "isPointInside"], [2, 0, 1, "", "mapStructToImg"], [9, 0, 1, "", "mergePDF"], [2, 0, 1, "", "overwriteCTPhysicalProperties"], [9, 0, 1, "", "pdfLandau"], [9, 0, 1, "", "pdfLandauGauss"], [9, 0, 1, "", "pdfVavilov"], [1, 0, 1, "", "pos"], [11, 0, 1, "", "readBeamModel"], [11, 0, 1, "", "readFREDStat"], [11, 0, 1, "", "readGATEStat"], [11, 0, 1, "", "readGATE_HITSActor"], [11, 0, 1, "", "readGATE_PSActor"], [4, 0, 1, "", "readMHD"], [4, 0, 1, "", "readMap3D"], [4, 0, 1, "", "readOPG"], [2, 0, 1, "", "resampleImg"], [11, 0, 1, "", "runFRED"], [11, 0, 1, "", "setFieldsFolderStruct"], [2, 0, 1, "", "setIdentityDirection"], [2, 0, 1, "", "setValueMask"], [6, 0, 1, "", "showSlice"], [6, 1, 1, "", "showSlices"], [9, 0, 1, "", "sigma2fwhm"], [4, 0, 1, "", "sortDicoms"], [2, 0, 1, "", "sumImg"], [2, 0, 1, "", "sumVectorImg"], [1, 0, 1, "", "transformContinuousIndexToPhysicalPoint"], [1, 0, 1, "", "transformIndexToPhysicalPoint"], [1, 0, 1, "", "transformPhysicalPointToContinuousIndex"], [1, 0, 1, "", "transformPhysicalPointToIndex"], [1, 0, 1, "", "vec"], [11, 0, 1, "", "writeBeamModel"], [4, 0, 1, "", "writeMHD"], [4, 0, 1, "", "writeMap3D"]], "fredtools.braggPeak": [[5, 2, 1, "", "accuracy"], [5, 2, 1, "", "bortCut"], [5, 2, 1, "", "bortfeldFit"], [5, 2, 1, "", "bortfeldFitParam"], [5, 2, 1, "", "bp"], [5, 2, 1, "", "bpBort"], [5, 2, 1, "", "bpInterp"], [5, 2, 1, "", "displayInfo"], [5, 3, 1, "", "getDBort"], [5, 3, 1, "", "getDFOBort"], [5, 3, 1, "", "getDFOInterp"], [5, 3, 1, "", "getDInterp"], [5, 3, 1, "", "getRBort"], [5, 3, 1, "", "getRInterp"], [5, 3, 1, "", "getWBort"], [5, 3, 1, "", "getWInterp"], [5, 2, 1, "", "interpolation"], [5, 2, 1, "", "offset"], [5, 2, 1, "", "plot"], [5, 2, 1, "", "splineOrder"]], "fredtools.ft_optimisation": [[10, 0, 1, "", "calcContours"], [10, 0, 1, "", "calcWETfromWER"], [10, 0, 1, "", "convertCTtoWER"], [10, 0, 1, "", "convertRayTargetToIsoPlane"], [10, 0, 1, "", "generateIsoLayers"], [10, 0, 1, "", "optimiseBeamPositions"], [10, 0, 1, "", "optimiseBeamPositionsHexagonal"], [10, 0, 1, "", "optimiseBeamPositionsRegular"]]}, "objtypes": {"0": "py:function", "1": "py:class", "2": "py:property", "3": "py:method"}, "objnames": {"0": ["py", "function", "Python function"], "1": ["py", "class", "Python class"], "2": ["py", "property", "Python property"], "3": ["py", "method", "Python method"]}, "titleterms": {"dij": [], "influenc": 3, "matrix": 3, "analys": [1, 3, 5, 7, 8, 12], "note": [2, 3, 4, 7, 9, 10, 11], "refer": [3, 4, 5, 8, 9, 11, 13], "get": 0, "subimag": 0, "exampl": [0, 1, 5, 6, 8, 9], "imag": [1, 2, 4, 6], "manipul": 2, "read": 4, "write": 4, "metaimag": 4, "file": 4, "mhd": 4, "mha": 4, "map3d": 4, "m3d": 4, "dicom": 4, "dcm": 4, "bragg": 5, "peak": 5, "displai": 6, "dvh": 7, "gamma": 8, "index": 8, "miscellan": 9, "optimis": 10, "tool": [10, 11, 15], "mont": 11, "carlo": 11, "simul": 11, "spot": 12, "citat": 13, "collabor": 14, "fred": 15, "v": 15, "0": 15, "7": 15, "1": [], "document": 15, "basic": 15, "concept": 15, "tutori": 15, "instal": 15, "develop": 15, "other": 4, "format": 4, "2": [], "5": [], "8": [], "9": [], "11": [], "13": [], "14": [], "15": [], "18": 15, "support": 15}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.todo": 2, "sphinx": 60}, "alltitles": {"Getting Subimage": [[0, "getting-subimage"]], "Examples": [[0, null], [0, null], [0, null], [0, null], [1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [1, null], [5, null], [5, null], [5, null], [5, null], [5, null], [5, null], [5, null], [5, null], [5, null], [6, null], [6, null], [8, null], [9, null]], "Image Analyse": [[1, "image-analyse"]], "Notes": [[3, null], [3, null], [3, null], [3, null], [4, null], [7, null], [9, null], [10, null], [10, null], [10, null], [10, null], [11, null], [11, null], [2, null], [2, null], [2, null], [2, null]], "Influence Matrix Analyse": [[3, "influence-matrix-analyse"]], "References": [[3, null], [4, null], [5, null], [8, null], [9, null], [9, null], [9, null], [9, null], [11, null], [11, null], [11, null]], "Image Reading and Writing": [[4, "image-reading-and-writing"]], "MetaImage files (*.mhd, *.mha)": [[4, "metaimage-files-mhd-mha"]], "Map3D images (*.m3d)": [[4, "map3d-images-m3d"]], "DICOM files (*.dcm, *.dicom)": [[4, "dicom-files-dcm-dicom"]], "Other formats": [[4, "other-formats"]], "Bragg Peak Analyse": [[5, "bragg-peak-analyse"]], "Display Image": [[6, "display-image"]], "DVH Analyse": [[7, "dvh-analyse"]], "Gamma Index Analyse": [[8, "gamma-index-analyse"]], "Miscellaneous": [[9, "miscellaneous"]], "Optimisation Tools": [[10, "optimisation-tools"]], "Monte Carlo simulation tools": [[11, "monte-carlo-simulation-tools"]], "Spot Analyse": [[12, "spot-analyse"]], "Citation and References": [[13, "citation-and-references"]], "Collaboration": [[14, "collaboration"]], "FRED tools v. 0.7.18 documentation": [[15, "fred-tools-v-fredtoolsversion-documentation"]], "Basic Concept": [[15, "basic-concept"]], "Documentation and tutorial": [[15, "documentation-and-tutorial"]], "Installation": [[15, "installation"]], "Development": [[15, "development"]], "Documentation:": [[15, null]], "Support": [[15, "support"]], "Image Manipulate": [[2, "image-manipulate"]]}, "indexentries": {"addexpmargintomask() (in module fredtools)": [[2, "fredtools.addExpMarginToMask"]], "addgaussmargintomask() (in module fredtools)": [[2, "fredtools.addGaussMarginToMask"]], "addmargintomask() (in module fredtools)": [[2, "fredtools.addMarginToMask"]], "createconemask() (in module fredtools)": [[2, "fredtools.createConeMask"]], "createcylindermask() (in module fredtools)": [[2, "fredtools.createCylinderMask"]], "createellipsemask() (in module fredtools)": [[2, "fredtools.createEllipseMask"]], "cropimgtomask() (in module fredtools)": [[2, "fredtools.cropImgToMask"]], "floatingtobinarymask() (in module fredtools)": [[2, "fredtools.floatingToBinaryMask"]], "getimgbev() (in module fredtools)": [[2, "fredtools.getImgBEV"]], "imgdivide() (in module fredtools)": [[2, "fredtools.imgDivide"]], "mapstructtoimg() (in module fredtools)": [[2, "fredtools.mapStructToImg"]], "overwritectphysicalproperties() (in module fredtools)": [[2, "fredtools.overwriteCTPhysicalProperties"]], "resampleimg() (in module fredtools)": [[2, "fredtools.resampleImg"]], "setidentitydirection() (in module fredtools)": [[2, "fredtools.setIdentityDirection"]], "setvaluemask() (in module fredtools)": [[2, "fredtools.setValueMask"]], "sumimg() (in module fredtools)": [[2, "fredtools.sumImg"]], "sumvectorimg() (in module fredtools)": [[2, "fredtools.sumVectorImg"]]}})