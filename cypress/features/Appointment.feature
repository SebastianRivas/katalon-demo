Feature: Programar una cita

Scenario: Realizar la asignacion de una cita con datos validos
    Given Tester realiza el login con "John Doe" como usuario y "ThisIsNotAPassword" como contraseña
    When Tester ingresa en elformulario de asignacion de citas los datos "Hongkong CURA Healthcare Center", "true", "medicaid", "25/01/2025", "comment"
    Then Tester verifica que la cita haya sido asignada

Scenario: Realizar la asignacion de una cita con datos invalidos
    Given Tester realiza el login con "John Doe" como usuario y "ThisIsNotAPassword" como contraseña
    When Tester ingresa en elformulario de asignacion de citas los datos "Hongkong CURA Healthcare Center", "false", "medicaid", "none", "comment"
    Then Tester verifica que la cita no haya sido asignada