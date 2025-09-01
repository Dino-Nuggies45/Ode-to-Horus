import librosa

y, sr = librosa.load("song.mp3")
tempo, beat_frames = librosa.beat.beat_track(y=y, sr=sr)
beat_times = librosa.frames_to_time(beat_frames, sr=sr)

rounded_beats = [round(float(bt), 2) for bt in beat_times]
print(rounded_beats)