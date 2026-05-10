
export function formatDuration(duration) {
  const mins = Math.floor(duration / 60);
  const secs = duration % 60;

  return `${mins}:${secs.toString().padStart(2, "0")}`;
};


export function getSongInfo(song) {
  return `${song.title} by ${song.artist} (${formatDuration(song.duration)})`;
};