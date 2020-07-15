const dev = {
  STRIPE_KEY: "pk_test_51H4s3FBEgCXVUzBBkgPak4q1K56aR5LmWClfxrFKH8ScP2gpj91yuFECVci7G5CO0qI4HvWRSstb9t9ANjTWpO1x00syJiO9sa",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-bamlo3ntet5o"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://q8f2f2f4s6.execute-api.us-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_a9xCWDAk5",
    APP_CLIENT_ID: "4tfj0nna18bffjugtlls3td5ju",
    IDENTITY_POOL_ID: "us-west-2:33d175c3-52b4-4409-b9a6-a7d6f52c7ba6"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51H4s3FBEgCXVUzBBkgPak4q1K56aR5LmWClfxrFKH8ScP2gpj91yuFECVci7G5CO0qI4HvWRSstb9t9ANjTWpO1x00syJiO9sa",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1ahctcxa7giod"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://7pwy3tceaa.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_tTsMnoSyS",
    APP_CLIENT_ID: "7ok0p0j2m3slspocb7r203ppg8",
    IDENTITY_POOL_ID: "us-west-2:1fa63541-c5b2-4d9a-bd1e-382e6ecf8d26"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};