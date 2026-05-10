import { usePlaylist } from "./PlaylistContext";

export function AddToPlaylist() {
  const { playlist } = usePlaylist();

  const coverColors = [
    "#5038a0", "#1a6b4a", "#8b3a3a",
    "#2c5f8a", "#7a4f1d", "#3a6b6b",
  ];

  return (
    <div style={{ padding: "1.5rem", fontFamily: "sans-serif", color: "#fff", background: "#121212", minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: "24px", marginBottom: "2rem" }}>
        <div style={{ width: 180, height: 180, borderRadius: 12, background: "linear-gradient(135deg,#1a1a2e,#0f3460)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 56 }}>🎵</span>
        </div>
        <div>
          <p style={{ fontSize: 12, color: "#aaa", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Playlist</p>
          <h1 style={{ fontSize: 36, fontWeight: 700, margin: "0 0 12px", lineHeight: 1.1 }}>My Playlist</h1>
          <p style={{ fontSize: 13, color: "#aaa", margin: 0 }}>
            {playlist.length} {playlist.length === 1 ? "song" : "songs"}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "2rem" }}>
        <button style={{ width: 48, height: 48, borderRadius: "50%", background: "#1DB954", border: "none", cursor: "pointer", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
          ▶
        </button>
        <button style={{ background: "transparent", border: "1px solid #555", padding: "6px 16px", borderRadius: 20, fontSize: 13, color: "#aaa", cursor: "pointer" }}>
          Shuffle
        </button>
      </div>

      {/* Column Headers */}
      <div style={{ display: "grid", gridTemplateColumns: "32px 1fr 140px 100px", gap: 12, padding: "0 8px 8px", borderBottom: "1px solid #282828", marginBottom: 4, color: "#aaa", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.07em" }}>
        <span style={{ textAlign: "center" }}>#</span>
        <span>Title</span>
        <span>Album</span>
        <span>Genre</span>
      </div>

      {/* Track List */}
      {playlist.length === 0 ? (
        <div style={{ textAlign: "center", color: "#aaa", padding: "3rem 0" }}>
          <p style={{ fontSize: 18, marginBottom: 8 }}>No songs yet</p>
          <p style={{ fontSize: 13 }}>Add songs to see them here.</p>
        </div>
      ) : (
        playlist.map((song, i) => (
          <div
            key={i}
            style={{ display: "grid", gridTemplateColumns: "32px 1fr 140px 100px", alignItems: "center", gap: 12, padding: "8px 8px", borderRadius: 6, cursor: "pointer", transition: "background 0.15s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#282828"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <span style={{ textAlign: "center", color: "#aaa", fontSize: 13 }}>{i + 1}</span>

            <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
              <div style={{ width: 40, height: 40, borderRadius: 4, background: coverColors[i % coverColors.length], flexShrink: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {song.coverUrl
                  ? <img src={song.coverUrl} alt={song.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  : <span style={{ fontSize: 16 }}>🎵</span>}
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{song.title}</p>
                <p style={{ margin: 0, fontSize: 12, color: "#aaa" }}>{song.artist}</p>
              </div>
            </div>

            <span style={{ fontSize: 13, color: "#aaa", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{song.album}</span>
            <span style={{ fontSize: 12, color: "#aaa" }}>{song.genre}</span>
          </div>
        ))
      )}
    </div>
  );
}