import pyqrcode
import pypng
from pyqrcode import QRCode


s = "https://imsatyampandey.github.io/Ticketless-Entry-System-to-Monuments-Museums/"

url = pyqrcode.create(s)

url.svg("myqr.svg", scale = 8)

# Create and save the png file naming "myqr.png"
url.png('myqr.png', scale = 6)
