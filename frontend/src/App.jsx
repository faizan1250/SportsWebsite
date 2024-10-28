import { Navigate, Route, Routes } from "react-router-dom";

import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import News from "./pages/News";

import LoadingSpinner from "./components/LoadingSpinner";

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import Stats from "./pages/Stats";
import Cricketnews from "./pages/Cricketnews";
import Sports from "./components/Sports";
import Footballnews from "./pages/Footballnews";
import Tennisnews from "./pages/Tennisnews";
import Cricketscore from "./pages/Cricketscore";
import Odi from "./pages/Odi";
import FirstClass from "./pages/FirstClass";
import Test from "./pages/Test";
import Twenty from "./pages/Twenty";
import Football from "./pages/Football";
import Score from "./pages/Score";
import Cricketstats from "./pages/Cricketstats";
import Footballstats from "./pages/Footballstats";
import Nba from "./pages/Nba";

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div
      className="min-h-[100vh] bg-gradient-to-br
     flex justify-center relative overflow-hidden"
    >
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/News"
          element={
            <ProtectedRoute>
              <News />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Sports"
          element={
            <ProtectedRoute>
              <Sports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Footballnews"
          element={
            <ProtectedRoute>
              <Footballnews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Cricketstats"
          element={
            <ProtectedRoute>
              <Cricketstats />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Footballstats"
          element={
            <ProtectedRoute>
              <Footballstats />
            </ProtectedRoute>
          }
        />
        <Route
          path="/NbaScores"
          element={
            <ProtectedRoute>
              <Nba />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Score"
          element={
            <ProtectedRoute>
              <Score />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Cricketnews"
          element={
            <ProtectedRoute>
              <Cricketnews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Tennisnews"
          element={
            <ProtectedRoute>
              <Tennisnews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Stats"
          element={
            <ProtectedRoute>
              <Stats />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Cricketscore"
          element={
            <ProtectedRoute>
              <Cricketscore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/footballscore"
          element={
            <ProtectedRoute>
              <Football />
            </ProtectedRoute>
          }
        />
        <Route
          path="/odi"
          element={
            <ProtectedRoute>
              <Odi />
            </ProtectedRoute>
          }
        />
        <Route
          path="/firstclass"
          element={
            <ProtectedRoute>
              <FirstClass />
            </ProtectedRoute>
          }
        />
        <Route path="/test" element={<Test />} />
        <Route
          path="/t-20"
          element={
            <ProtectedRoute>
              <Twenty />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />

        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />

        {/* catch all routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
