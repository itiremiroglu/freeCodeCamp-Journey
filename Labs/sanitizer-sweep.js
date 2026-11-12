let logs_1 = [
    "INFO: Server started on port 3000",
    "DEBUG: user=admin token=abc123 connected",
    "WARN: High memory usage detected at 87%"
];

let logs_2 = [
    "FATAL: System overload detected, shutting down",
    "DEBUG: token=def456$ refreshed for session",
    "ERROR: Null pointer exception in module auth"
];

let logs_3 = [
    "ERROR: Failed to connect to db, retry=3",
    "DEBUG: api_key=XYZ789 used in request",
    "/INFO: Cache cleared successfully",
    "WARN: Disk usage at 92%, threshold=90%",
    "/INFO: Disk usage stabilized"
];

function sanitizeLog(entry) {
    let result = entry;
    for (let char of disallowedCharacters) {
        result = result.split(char).join("#");
    }
    return result;
}

function cleanLogs(logs, disallowedCharacters) {
    let sanitizedCount = 0;
    let infoCount = 0;
    for (let entry of logs) {
        if (entry.includes("$")) {
            return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
        }
        if (entry.startsWith("/")) {
            infoCount++;
        } else {
            sanitizeLog(entry, disallowedCharacters);
            sanitizedCount++;
        }
    }
    let totalCount = logs.length;
    return `Total Entry Count: ${totalCount}. Sanitized Entry Count: ${sanitizedCount}. Informational Entry Count: ${infoCount}. Finished sanitizing logs.`;
}