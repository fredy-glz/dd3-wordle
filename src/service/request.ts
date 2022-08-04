export const getWord = async () => {
  try {
    const URL: string = 'https://random-word-api.herokuapp.com/word?length=5';
    const response: Response = await fetch(URL);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log(error);
    return false;
  }
};

export async function isValidWord(word: string) {
  try {
    const URL: string =
      'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
    const response: Response = await fetch(URL);
    if (response.status !== 200) throw new Error('Request Failed');
    const json = await response.json();
    return json.length;
  } catch (e) {
    console.log(e);
    return false;
  }
}
