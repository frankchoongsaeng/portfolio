import axios from "axios";

export default (req, res) => {
  axios
    .get(
      `https://api.notion.com/v1/databases/${process.env.NOTION_BLOG_DB_ID}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NOTION_INTEGRATION_KEY}`,
          "Content-Type": "application/json",
          "Notion-Version": "2021-08-16",
        },
      }
    )
    .then((response) => {
      res.status(response.status).json(response.data);
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        res.status(error.response.status).json(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        res.status(444).json({ message: error.message });
      } else {
        // Something happened in setting up the request that triggered an Error
        res.status(500).json({ message: error.message });
      }
    });
};
