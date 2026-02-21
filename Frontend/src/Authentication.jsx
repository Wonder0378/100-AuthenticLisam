import { useState } from "react";
import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "002a3057-4b4c-414e-9829-6e6374b4beee",
    authority: "https://login.microsoftonline.com/968da37b-122f-4a2b-8074-ec369b2a8c92",
    redirectUri: "http://localhost:5173/",
  }
};

const loginRequest = {
  scopes: ["User.Read"]
};

const msalInstance = new PublicClientApplication(msalConfig);


export async function signIn() {
  try {
    await msalInstance.initialize();
    const response = await msalInstance.loginRedirect(loginRequest);
    console.log("Access token:", response.accessToken);
    console.log("ID Token:", response.idToken);
  } catch (error) {
    console.error(error);
  }
}
