export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51H4s3FBEgCXVUzBBkgPak4q1K56aR5LmWClfxrFKH8ScP2gpj91yuFECVci7G5CO0qI4HvWRSstb9t9ANjTWpO1x00syJiO9sa",
  s3: {
    REGION: "us-west-2",
    BUCKET: "franck-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://ysq3zjqsid.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_mz9bcthJ2",
    APP_CLIENT_ID: "1cgnf2c4sckt6k8nr8pm9g5oi9",
    IDENTITY_POOL_ID: "us-west-2:600e6c1e-0ab5-4f00-9263-47157242e4f0"
  }
};

