from flask import Flask, request, jsonify
from flask_cors import CORS

import os
import sys
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

load_dotenv()  # This loads the environment variables from .env

from flask_cors import CORS

current_dir = os.path.dirname(os.path.abspath(__file__))
backend_dir = os.path.join(current_dir, '..', 'src')
sys.path.append(backend_dir)

app = Flask(__name__)
CORS(app)



def send_email(subject, body, to_email):
    print("Attempting to send email...")
    from_email = os.getenv('FROM_EMAIL')
    password = os.getenv('EMAIL_PASSWORD')
    smtp_server = os.getenv('SMTP_SERVER')
    smtp_port = int(os.getenv('SMTP_PORT', 465))

    msg = MIMEMultipart()
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = to_email
    msg.attach(MIMEText(body, 'plain'))

    try:
        with smtplib.SMTP_SSL(smtp_server, smtp_port) as server:
            server.login(from_email, password)
            server.sendmail(from_email, to_email, msg.as_string())
        print("Email sent successfully!")
        return True, "Email sent successfully!"
    except smtplib.SMTPException as e:
        print(f"SMTP error occurred: {e}")
    except Exception as e:
        print(f"Failed to send email: {e}")
    return False, "Failed to send email due to server error."


@app.route('/process-idea', methods=['POST'])
def send():
    print("Here")
    data = request.get_json()
    subject = data.get('subject')
    body = data.get('body')
    to_email = data.get('to_email')
    
    success, message = send_email(subject, body, to_email)
    return jsonify({'success': success, 'message': message})

if __name__ == '__main__':
    app.run(debug=True)
