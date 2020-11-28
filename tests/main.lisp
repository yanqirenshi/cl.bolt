(defpackage cl-bolt/tests/main
  (:use :cl
        :cl-bolt
        :rove))
(in-package :cl-bolt/tests/main)

;; NOTE: To run this test file, execute `(asdf:test-system :cl-bolt)' in your Lisp.

(deftest test-target-1
  (testing "should (= 1 1) to be true"
    (ok (= 1 1))))
