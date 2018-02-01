export default {
  MAX_ATTACHMENT_SIZE: 100000000,
  s3: {
    BUCKET: "spat-app-uploads"
  },
  apiGateway: {
    URL: "https://9j9nlj5sqe.execute-api.ap-southeast-2.amazonaws.com/prod",
    REGION: "ap-southeast-2"
  },
  cognito: {
    USER_POOL_ID: "ap-southeast-2_gwpKoO8PG",
    APP_CLIENT_ID: "3quk3kelftu8nf6vhltbv1tl0p",
    REGION: "ap-southeast-2",
    IDENTITY_POOL_ID: "ap-southeast-2:b5937430-869c-49fc-942a-eaac988f8209"
  }
};