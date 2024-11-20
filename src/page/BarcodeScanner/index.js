import React, { useState } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import { useEffect } from 'react';

const BarcodeScanner = () => {
  const [barcode, setBarcode] = useState(null);
  const [isScanning, setIsScanning] = useState(true);

  // Hàm này được gọi khi quét thành công mã vạch
  const handleScan = (data) => {
    if (data) {
      setBarcode(data.text); // Lưu mã vạch vừa quét vào state
      setIsScanning(false);   // Dừng quét sau khi quét thành công
    }
  };

  // Hàm này được gọi khi gặp lỗi trong quá trình quét
  const handleError = (err) => {
    console.error('Lỗi khi quét mã vạch:', err);
  };

  // Sử dụng effect để khởi tạo hoặc dọn dẹp nếu cần
  useEffect(() => {
    if (!isScanning) {
      // Nếu đã quét thành công, không tiếp tục quét nữa
      console.log('Mã vạch đã quét:', barcode);
    }
  }, [isScanning, barcode]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-xl font-semibold mb-4">Quét Mã Vạch</h2>

        {/* Hiển thị video camera để quét mã vạch */}
        {isScanning ? (
          <div>
            <BarcodeScannerComponent
              width="100%"
              height="400px"
              onUpdate={(err, result) => {
                if (result) {
                  handleScan(result);
                } else if (err) {
                  handleError(err);
                }
              }}
            />
            <p className="mt-4 text-gray-500">Hướng camera tới mã vạch để quét.</p>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-bold text-green-500">Đã quét mã vạch thành công!</h3>
            <p className="mt-2 text-sm text-gray-600">Mã vạch: <span className="font-semibold">{barcode}</span></p>
            <button
              className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              onClick={() => setIsScanning(true)} // Reset để tiếp tục quét
            >
              Quét lại
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BarcodeScanner;