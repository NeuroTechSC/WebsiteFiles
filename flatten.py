# flatten.py
#
# Rico Rodriguez Passanisi
#
# This script flattens the website/ file hierarchy so every file is in the same folder.
#
# 1. COPY website/ to website-deploy/
# 2. Create array of absolute paths of all html and css files.
# 3. for every html file, search for src="...", and replace any value in quotes with str.split('/')[-1]
# 4. for every css file, search for url('...') and replace any value in quotes with str.split('/')[-1]
# 5. move all files out of nested folders and into website-deploy/

import os
import shutil
import codecs

# flattenPath(src, begin, num)
# INPUT source string, beginning of tag (ie. url(, src=, href= ,..), num = number of characters until " character
# OUTPUT: Returns flattened file path inside quotation

def flattenPath(src, begin, num):
    start = src.find(begin) + num
    end = src.find("\"", start)

    return src.replace(src[start:end], src[start:end].split('/')[-1])

def moveToMain(dir, dst, opt=0):
    # Get list of directories in current directory
    subDirs = [temp for temp in os.listdir(dir) if '.' not in temp]
    # Recursive step
    if len(subDirs) != 0:
        for sub in subDirs:
            moveToMain(os.path.abspath(f'{dir}/{sub}'), dst)

    if opt == 0:
        for file in [files for files in os.listdir(dir) if '.' in files]:
            if '.DS_Store' in file:
                if os.path.exists('.DS_Store'):
                    os.remove(file)
                continue
            os.rename(f'{dir}/{file}', f'{dst}/{file}')
    
    
def main():

    FLAT_DIR = './website-flat'
    # Remove website-deploy/ directory if it exists
    if os.path.exists(FLAT_DIR):
        shutil.rmtree(FLAT_DIR)

    shutil.copytree('./website', FLAT_DIR)

    htmlFiles = os.listdir(FLAT_DIR)
    cssFiles = os.listdir(f'{FLAT_DIR}/css')

    # 3
    for htmlFile in htmlFiles:
        if '.html' not in htmlFile:
            continue
        with open(f'{FLAT_DIR}/{htmlFile}', 'r+', encoding='utf8') as inFile:
            content = inFile.readlines()
            for i, line in enumerate(content):
                if 'src="' in line:
                    content[i] = flattenPath(line, "src=", 5)
                elif 'rel="stylesheet"' in line:
                    content[i] = flattenPath(line, "href=", 6)
                elif 'rel="shortcut icon"' in line:
                    content[i] = flattenPath(line, "href=", 6)
            inFile.truncate(0)
            inFile.seek(0)
            inFile.writelines(content)

    for cssFile in cssFiles:
        with open(f'{FLAT_DIR}/css/{cssFile}', 'r+') as inFile:
            content = inFile.readlines()
            for i, line in enumerate(content):
                if "url(\"" in line:

                    content[i] = flattenPath(line, "url(\"", 5)
            inFile.truncate(0)
            inFile.seek(0)
            inFile.writelines(content)


    # Move all files into FLAT_DIR directory
    moveToMain(FLAT_DIR, f'{FLAT_DIR}', 1)

if __name__ == "__main__":
    main()

