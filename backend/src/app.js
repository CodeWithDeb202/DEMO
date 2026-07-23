import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js";

import userRoutes from "./routes/user.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import companyRoutes from "./routes/company.routes.js";
import internshipRoutes from "./routes/internship.routes.js";
import applicationRoutes from "./routes/application.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import taskRoutes from "./routes/task.routes.js";
import attendanceRoutes from "./routes/attendance.routes.js";
import interviewRoutes from "./routes/interview.routes.js";
import offerRoutes from "./routes/offer.routes.js";
import downloadRoutes from "./routes/download.routes.js";
import certificateRoutes from "./routes/certificate.routes.js";
import messageRoutes from "./routes/message.routes.js";
import meetingRoutes from "./routes/meeting.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import bookmarkRoutes from "./routes/bookmark.routes.js";
import activityRoutes from "./routes/activity.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";
import searchRoutes from "./routes/search.routes.js";


import errorMiddleware from "./middleware/error.middleware.js";
import morganMiddleware from "./middleware/logger.middleware.js";
import errorHandler from "./middleware/errorHandlre.js";


import { swaggerUi, swaggerSpec } from "./config/swagger.js";





const app = express();



// ==========================================
// Global Middlewares
// ==========================================


app.use(
  
  cors({
    
    origin: process.env.CLIENT_URL || "http://localhost:5199",
    
    credentials: true
    
  })
  
);



app.use(express.json());


app.use(
  
  express.urlencoded({
    
    extended: true
    
  })
  
);


app.use(cookieParser());




// ==========================================
// Logger Middleware
// FIRST
// ==========================================


app.use(morganMiddleware);




// ==========================================
// API Routes
// ==========================================


app.use("/api/auth", authRoutes);

app.use("/api/profile", profileRoutes);

app.use("/api/users", userRoutes);

app.use("/api/companies", companyRoutes);

app.use("/api/internships", internshipRoutes);

app.use("/api/applications", applicationRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/tasks", taskRoutes);

app.use("/api/attendance", attendanceRoutes);

app.use("/api/interviews", interviewRoutes);

app.use("/api/offers", offerRoutes);

app.use("/api/download", downloadRoutes);

app.use("/api/certificates", certificateRoutes);

app.use("/api/messages", messageRoutes);

app.use("/api/meetings", meetingRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/notifications", notificationRoutes);

app.use("/api/bookmarks", bookmarkRoutes);

app.use("/api/activities", activityRoutes);

app.use("/api/analytics", analyticsRoutes);

app.use("/api/search", searchRoutes);





// ==========================================
// Swagger Documentation
// ==========================================


app.use(
  
  "/api/docs",
  
  swaggerUi.serve,
  
  swaggerUi.setup(
    
    swaggerSpec,
    
    {
      
      explorer: true
      
    }
    
  )
  
);





// ==========================================
// Health Check
// MUST BE BEFORE 404
// ==========================================


app.get("/", (req, res) => {
  
  
  res.status(200).json({
    
    success: true,
    
    message: "Tech Monster Backend Running 🚀"
    
  });
  
  
});





// ==========================================
// 404 Handler
// ==========================================


app.use(
  
  (req, res) => {
    
    res.status(404).json({
      
      success: false,
      
      message: "Route not found"
      
    });
    
  }
);





// ==========================================
// Error Middleware
// ALWAYS LAST
// ==========================================


app.use(errorMiddleware);


app.use(errorHandler);




export default app;