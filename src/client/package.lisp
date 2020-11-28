(defpackage cl-bolt.client
  (:use :cl))
(in-package :cl-bolt.client)


(defun create-server (port)
  (let* ((socket (usocket:socket-listen "127.0.0.1" port))
         ;; 接続が確立されたときにだけ値を返す 
         (connection (usocket:socket-accept socket :element-type 'character)))
    (unwind-protect
         (progn
           (format (usocket:socket-stream connection) "Hello World~%")
           (force-output (usocket:socket-stream connection)))
      (progn
        (format t "Closing sockets~%")
        (usocket:socket-close connection)
        (usocket:socket-close socket)))))


(defun create-client (&key (host "127.0.0.1") port)
  (let ((socket (usocket:socket-connect host port :element-type 'character)))
    (unwind-protect
         (progn
           (usocket:wait-for-input socket)
           (format t "~A~%" (read-line (usocket:socket-stream socket))))
      (usocket:socket-close socket))))
