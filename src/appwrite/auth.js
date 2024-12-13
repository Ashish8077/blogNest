import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Error creating account:", error);
      throw new Error(
        "An error occurred while creating the account. Please try again later."
      );
    }
  }

  async login({ email, password }) {
    try {
      // Check if the user is already logged in (based on your session management)
      // const currentSession = await this.account.getSession("current");
      // if (currentSession) {
      //   return {
      //     success: true,
      //     message: "You are already logged in",
      //   };
      // }

      await this.account.createEmailPasswordSession(email, password);
      return {
        message: "You have been logged in successfully.",
      };
    } catch (error) {
      console.error("Error logging in:", error.message);

      // Check if the error is due to invalid credentials (401 Unauthorized)
      if (error.code === 401) {
        return {
          error: "Invalid email or password. Please try again.",
        };
      }
      return {
        error: "Invalid email or password. Please try again.",
      };
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.error("Error logging out:", error.message);
      return {
        error: "An error occurred while logging out. Please try again later.",
      };
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Error fetching current user:", error.message);
      return {
        error:
          "An error occurred while fetching the user data. Please try again later.",
      };
    }
  }
}

const authService = new AuthService();
export default authService;
