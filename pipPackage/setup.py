'''
Uploading the package on pypi

1. change version in fredtools/__init__.py file
2. commit, tag. git push --tags
3. build package:

$ python3 setup.py bdist_wheel

4a. upload package to test pip repository:

$ twine upload --repository-url https://test.pypi.org/legacy/ dist/*

5a. install package from the test repository:

- remove existing package:

$ pip3 uninstall fredtools

- install new version (replace {version} with the version number):

$ pip3 install --extra-index-url https://test.pypi.org/simple/ fredtools=={version}

4b. upload package to real pip repository:

$ twine upload  dist/*

5b. install package from the real repository:

$ pip3 install fredtools
'''

import setuptools
import sys
sys.path.insert(0, './../')
from fredtools import __version__

# use GitHub readme as PIP long description
with open("./../README.md", "r") as fh:
    long_description = fh.read()


'''Use generated requirements. To generate requirements run:
$ pipreqs fredtools
in the main folder. Install pipreqs with 'pip install pipreqs'
'''
with open("./../fredtools/requirements.txt", "r") as req_h:
    requirements = req_h.readlines()
requirements = [req.strip().replace('==', '>=') for req in requirements]


setuptools.setup(
    name="fredtools",
    version=__version__,
    author="FRED Collaboration",
    author_email="jan.gajewski@ifj.edu.pl",
    description="FRED tools is a collection of python functions for image manipulation and analysis. See more on https://github.com/jasqs/FREDtools.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/jasqs/FREDtools",
    packages=['fredtools', 'fredtools.ft_imgIO'],
    package_dir={'fredtools': './../fredtools'},
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: GNU Lesser General Public License v3 (LGPLv3)",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.8,<4.0',
    install_requires=requirements,
    scripts=[]
)
