const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBIZlR7gmt7x3WLZ3WnsnzjrYDfN8UfoAg`;

export const getTextFromImage = async (image) => {
  const data = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: 'TEXT_DETECTION',
            maxResults: 1,
          },
        ],
      },
    ],
  };

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    return json;
  } catch (error) {
    console.error('Error fetching text from image:', error);
    throw error; // Optionally re-throw the error after logging it
  }
};
