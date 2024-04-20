from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import re
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)
CORS(app)  # This is used to allow cross-origin requests from your front-end

# Simple email regex for validation
def is_valid_email(email):
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    return re.match(pattern, email)

# Route to handle email submission
@app.route('/submit-email', methods=['POST'])
def submit_email():
    email = request.json.get('email')
    
    if not is_valid_email(email):
        return jsonify({'error': 'Invalid email format'}), 400
    
    # Write to CSV (append mode)
    with open('emails.csv', mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([email])
    
    # Sending email (replace with your SMTP settings)
    try:
        msg = MIMEText('This is a confirmation email.')
        msg['Subject'] = 'Confirm Your Email'
        msg['From'] = 'you@example.com'
        msg['To'] = email

        # Replace with your real credentials and SMTP server details
        server = smtplib.SMTP('smtp.example.com', 587)
        server.starttls()
        server.login('you@example.com', 'yourpassword')
        server.sendmail('you@example.com', [email], msg.as_string())
        server.quit()
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
    return jsonify({'message': 'Email submitted and confirmation sent'}), 200

if __name__ == '__main__':
    app.run(debug=True)
