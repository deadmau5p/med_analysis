const callBackendOpenAIAPI = async (prompt) => {
  try {
    const response = await fetch('http://127.0.0.1:5000/call-openai', { // Make sure the URL matches your Flask server's address
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prompt),
    });

    console.log('Response:', response);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result.response; // Adjust according to the JSON structure returned by your Flask app
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrowing the error to be caught by the calling function
  }
};

export default callBackendOpenAIAPI;