#!/usr/bin/env python

import wave, sys, struct, json
w = wave.open(sys.argv[1], 'rb')
print "Wave file contains %d frames" % w.getnframes()
list_of_pcm = []
for i in range(w.getnframes()):
    frame = w.readframes(1)
    list_of_pcm.append(struct.unpack("h", frame)[0])

print "var sampleData = ", json.dumps(list_of_pcm), ";"
