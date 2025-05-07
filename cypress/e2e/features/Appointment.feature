Feature: Programar una cita

    Scenario: Realizar la asignacion de una cita con datos validos
        Given Tester desea ingresar al login
        When Tester ingresa "John Doe" como usuario y "ThisIsNotAPassword" como contraseña
        When Tester ingresa en el formulario de asignacion de citas los datos
            """
            {
                "facility": "Hongkong CURA Healthcare Center",
                "hospital_readmission": true,
                "healthcare_program": "medicaid",
                "visit_date": "25/01/2025",
                "comment": "comment"
            }
            """
        Then Tester verifica que la cita haya sido asignada
        Then Tester verifica que el resumen de la cita corresponda con
            """
            {
                "facility": "Hongkong CURA Healthcare Center",
                "hospital_readmission": "Yes",
                "healthcare_program": "Medicaid",
                "visit_date": "25/01/2025",
                "comment": "comment"
            }
            """

    Scenario: Realizar la asignacion de una cita con datos invalidos
        Given Tester desea ingresar al login
        When Tester ingresa "John Doe" como usuario y "ThisIsNotAPassword" como contraseña
        When Tester ingresa en el formulario de asignacion de citas los datos
            """
            {
                "facility": "Hongkong CURA Healthcare Center",
                "hospital_readmission": false,
                "healthcare_program": "medicaid",
                "visit_date": null,
                "comment": "comment"
            }
            """
        Then Tester verifica que la cita no haya sido asignada