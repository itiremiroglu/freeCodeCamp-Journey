function flattenPlaylists(playlists) {
    if (!Array.isArray(playlists)) {
        return [];
    }
    let result = [];
    for (let i = 0; i < playlists.length; i++) {
        let currentPlaylist = playlists[i];
        if (Array.isArray(currentPlaylist)) {
            for (let j = 0; j < currentPlaylist.length; j++) {
                let track = currentPlaylist[j];
                result.push({
                    ...track,
                    source: [i, j]
                });
            }
        }
    }
    return result;
}

function scoreTracks(tracks) {
    let result = [];
    for (let i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        let score = track.votes * 10 - Math.abs(track.bpm - 120);
        result.push({
            ...track,
            score: score
        });
    }
    return result;
}

function dedupeTracks(tracks) {
    let result = [];
    let seenIds = [];
    for (let i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        if (!seenIds.includes(track.trackId)) {
            result.push(track);
        }
    }
    return result;
}

function enforceArtistQuota(tracks, maxPerArtist) {
    let result = [];
    let artistCounts = {};
    for (let i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        let artist = track.artist;
        if (!artistCounts[artist]) {
            artistCounts[artist] = 0;
        }

        if (artistCounts[artist] < maxPerArtist) {
            artistCounts[artist]++;
            result.push(track);
        }
    }
    return result;
}

function buildSchedule(tracks) {
    let result = [];
    for (let i = 0; i < tracks.length; i++) {
        result.push({
            slot: i + 1,
            trackId: tracks[i].trackId
        });
    }
    return result;
}

function remixPlaylists(playlists, maxPerArtist) {
    let flat = flattenPlaylists(playlists);
    let scored = scoreTracks(flat);
    let deduped = dedupeTracks(scored);
    let quotaEnforced = enforceArtistQuota(deduped, maxPerArtist);
    return buildSchedule(quotaEnforced);
}