const message = "Please buy our stuff!";
const hasSpam = message.includes("buy");
if (hasSpam) {
  console.log("Warning: This message contains forbidden words.");
} else {
  console.log("You can safely open this message.");
}

