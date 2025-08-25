const processRequestBody = (req) =>
  new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });

const returnErrorWithMessage = (res, code = 500, message) => {
  res.statusCode = code;
  res.json({ message: message || "Internal Server Error" });
};

export { processRequestBody, returnErrorWithMessage };
