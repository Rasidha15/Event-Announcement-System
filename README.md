# Event Announcement System

The **Event Announcement System** is a cloud-based web application designed to simplify the process of announcing and managing events online. It uses various AWS services to ensure scalability, reliability, and automation.

## Features
- Hosts a static website using **Amazon S3**.
- Processes event announcements through **API Gateway** and **AWS Lambda**.
- Stores event data securely in **Amazon DynamoDB**.
- Sends notifications to subscribers via **Amazon SNS**.
- Uses **IAM** for secure access and permissions management.

## Technologies Used
- **Amazon S3** – For hosting the frontend static website.  
- **Amazon API Gateway** – Connects the frontend with the backend Lambda function.  
- **AWS Lambda** – Executes backend logic without managing servers.  
- **Amazon DynamoDB** – NoSQL database for storing event and subscriber data.  
- **Amazon SNS** – Sends real-time notifications to users.  
- **AWS IAM** – Manages roles and access permissions.

## How It Works
1. Users submit event details through the web interface.  
2. API Gateway triggers a Lambda function.  
3. Lambda stores event details in DynamoDB.  
4. SNS sends notifications to subscribers about new events.  
5. The static site hosted on S3 displays all event updates.

## Project Type
Cloud-Based Event Announcement Website using AWS Services.

## 👩‍💻 Developer
Developed by **Rasidha Begum** as part of the B.Tech (IT) final year project.
