// sendNotification.js

async function sendPushNotification(expoPushToken, message) {
  const notification = {
    to: expoPushToken,
    sound: "default",
    title: "New Group Created",
    body: message,
    data: { someData: "goes here" },
  };

  try {
    const response = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notification),
    });

    const responseData = await response.json();
    console.log("Push notification sent:", responseData);
  } catch (error) {
    console.error("Error sending push notification:", error.message);
  }
}

export { sendPushNotification };
