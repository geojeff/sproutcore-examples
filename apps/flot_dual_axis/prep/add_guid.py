filenames = ['price.js.fixme', 'rate.js.fixme']

for filename in filenames:
    out = open(filename[:-6], 'w')
    index = 0
    for line in open(filename).readlines():
        if len(line) > 0:
            if line.startswith('    {'):
                line = line.strip()
                out.write('    { \'guid\': %d, %s\n' % (index, line[1:]))
                index += 1
            else:
                out.write(line)
        else:
            out.write('\n')
