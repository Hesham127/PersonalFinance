# 🧾 Receipt Detection AI Model

This module provides an AI-powered pipeline to **scan, detect, and parse receipts** from user-uploaded images. It integrates with the transaction app backend to automatically record expenses, income, and transfers based on scanned receipts.

---

## 🚀 Features

- **Receipt Detection**
  - Uses OpenCV to detect receipt contours in scanned images.
  - Applies perspective transformation to correct skewed or angled receipts.

- **Image Preprocessing**
  - Grayscale conversion, denoising, sharpening, and adaptive thresholding.
  - Morphological operations to enhance text clarity for OCR.

- **OCR (Optical Character Recognition)**
  - Powered by [Tesseract OCR](https://github.com/tesseract-ocr/tesseract).
  - Extracts text content from receipts.

- **Information Parsing**
  - Extracts:
    - **Store name** (first line of receipt).
    - **Date** (supports formats like `dd/mm/yyyy` or `yyyy-mm-dd`).
    - **Total amount**.
    - **Item list** (basic regex for `item_name price`).

- **Backend Integration**
  - Sends parsed data as JSON to a Spring Boot backend (`/api/receipts`).
  - Updates account balance and transaction records automatically.

---

## 📂 Project Structure
receipt_model/ 
│── receipt_ai.py       
# Main pipeline: detection, OCR, parsing, backend integration 
│── requirements.txt    
# Python dependencies
│── README.md            
# Documentation (this file)


---

## ⚙️ Requirements

- Python 3.8+
- Libraries:
  - `opencv-python`
  - `numpy`
  - `matplotlib`
  - `pytesseract`
  - `requests`
  - `json`

Install dependencies:

```bash
pip install -r requirements.txt
```
🖼️ Usage
- Place your receipt image in the input directory (e.g., /kaggle/input/reciept/reciept.jpg).
- Run the script:
```
python receipt_ai.py
```
- The pipeline will:
- Detect and preprocess the receipt.
- Extract text via OCR.
- Parse store name, date, total amount, and items.
- Send structured JSON data to the backend.
# 📤 Example Output
Extracted JSON Payload
```
{
  "storeName": "SuperMart",
  "receiptDate": "2025-12-14",
  "totalAmount": 45.90,
  "items": [
    {"name": "Milk", "quantity": 1, "unit_price": 2.50},
    {"name": "Bread", "quantity": 1, "unit_price": 1.20},
    {"name": "Eggs", "quantity": 1, "unit_price": 3.00}
  ]
}
```
# Backend Response
```
Response from backend: 200 OK
{"message":"Receipt saved successfully"}
```



