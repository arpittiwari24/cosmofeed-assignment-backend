# Multi-Channel Notification Delivery System


### Overview

This project aims to create a multi-channel notification delivery system in Node.js. The system allows clients to send notifications via various channels such as push notifications, SMS, and email.

### Architecture
The system architecture consists of the following components:

#### Notification Service
 Responsible for managing notifications and dispatching them to appropriate channels.

#### Channel Handlers
 Individual modules for handling different channels like push notifications, SMS, email, etc.

### Implementation Details

#### Notification Service
The index.js file contains the core logic for sending notifications. It exposes a function sendNotification which takes a notification object as input and determines the appropriate channels to use based on the notification type and client preferences. It then dispatches the notifications to the respective channel handlers.

#### Channel Handlers
Each channel (e.g., push notifications, SMS, email) has its own handler module responsible for sending notifications through that channel. These modules include push.js, sms.js, and sendEmail.js. Each handler exposes a function to send notifications via their respective channels.

### Diagramatic Approach

                      +----------------+
                      |   Client       |
                      +----------------+
                              |
                              | Requests Notification
                              v
                    +---------------------+
                    | Notification Service|
                    +---------------------+
                              |
    +-------------------------------------------------------------+
    |              Decision on notification channels             |
    |            (Push, SMS, Email, etc.) based on              |
    |           client preference and notification type          |
    +-------------------------------------------------------------+
                              |
          +---------------------------------------+
          |       Channel Handler (Push)         |
          |       Channel Handler (SMS)          |
          |       Channel Handler (Email)        |
          +---------------------------------------+
                        |      |     |
                        v      v     v
               Node Push API   |   SMTP API(Nodemailer)
                               |
                            Fast2sms or twilio or plivo



## Run Locally
### Prerequisites:
   
| Required | Version/Location   
| :-------- | :------- | 
| `Nodejs`      | `18.x or latest` |

#### Clone the project

```bash
git clone https://github.com/arpittiwari24/cosmofeed-assignment-backend.git
```

#### Go to the project directory

```bash
cd cosmofeed-assignment-backend
```

#### Populate the .env.local file

```bash
PASSWORD = 

EMAIL = 

PUBLIC_KEY = 

PRIVATE_KEY = 
```

#### Run the app 

```bash
make run 
```
