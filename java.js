document.addEventListener('DOMContentLoaded', (event) => {
    // สุ่มเครื่องหมายและกำหนดโอกาสเกิด
    const symbols = ['✔️', '✖️'];
    const messages = ['User Safty', 'User not Safty'];
    const symbolIndex = Math.random() < 0.2 ? 0 : 1;
    const symbol = symbols[symbolIndex];
    const message = messages[symbolIndex];
  
    // สร้างและแสดงเครื่องหมาย
    const symbolElement = document.createElement('div');
    symbolElement.innerHTML = symbol;
    document.body.appendChild(symbolElement);
  
    // แสดงข้อความตามเครื่องหมาย
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    document.body.appendChild(messageElement);
  
    // ตั้งค่าสไตล์สำหรับเครื่องหมายและข้อความ
    symbolElement.style.fontSize = '48px';
    symbolElement.style.textAlign = 'center';
    messageElement.style.fontSize = '24px';
    messageElement.style.textAlign = 'center';
  });
  