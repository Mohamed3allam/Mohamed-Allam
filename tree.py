import os

def print_directory_tree(startpath):
    for root, dirs, files in os.walk(startpath):
        # Exclude 'node_modules' from the directory list
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        level = root.replace(startpath, '').count(os.sep)
        indent = ' ' * 4 * (level)
        print('{}{}/'.format(indent, os.path.basename(root)))
        subindent = ' ' * 4 * (level + 1)
        for f in files:
            print('{}{}'.format(subindent, f))

print_directory_tree('.')
