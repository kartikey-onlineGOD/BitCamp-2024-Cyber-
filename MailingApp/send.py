import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(subject, body, to_email, from_email, password):
    # Create the root message and fill in the from, to, and subject headers
    msg = MIMEMultipart()
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = to_email
    msg.attach(MIMEText(body, 'plain'))

    # Connect to Hostinger's SMTP server and send the email
    try:
        # Use the appropriate server and port
        server = smtplib.SMTP_SSL('smtp.hostinger.com', 465)  # Change to use SMTP_SSL if using port 465
        # server.starttls()  # Uncomment if using TLS with port 587
        server.login(from_email, password)
        server.sendmail(from_email, to_email, msg.as_string())
        print("Email sent successfully!")
    except Exception as e:
        print(f"Failed to send email: {e}")
    finally:
        server.quit()

# Usage
subject = "I am too cracked"
body = "Lets Fucking Go!!"
to_email = "kartikeypandey18@gmail.com  "
from_email = "info@kartikeypandey.online"
password = "Welcome@12345"

send_email(subject, body, to_email, from_email, password)
