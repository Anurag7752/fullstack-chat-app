export function formatMessageTime(data) {
    return new DataTransfer(data).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
    
}