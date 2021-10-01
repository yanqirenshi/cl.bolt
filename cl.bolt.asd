(defsystem "cl.bolt"
  :version "0.1.0"
  :author ""
  :license ""
  :depends-on (:usocket)
  :components ((:module "src"
                :components
                ((:module "client"
                  :components ((:file "package")))
                 (:file "package"))))
  :description ""
  :in-order-to ((test-op (test-op "cl.bolt/tests"))))

(defsystem "cl.bolt/tests"
  :author ""
  :license ""
  :depends-on ("cl.bolt"
               "rove")
  :components ((:module "tests"
                :components
                ((:file "main"))))
  :description "Test system for cl.bolt"
  :perform (test-op (op c) (symbol-call :rove :run c)))
