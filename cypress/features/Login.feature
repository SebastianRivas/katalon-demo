Feature: Acceder a la aplicacion

Scenario: Realizar el login con datos validos
    Given Tester desea ingresar al login
    When Tester ingresa "John Doe" como usuario y "ThisIsNotAPassword" como contraseña
    Then Tester verifica que puede accer al aplicativo

Scenario: Realizar el login con datos invalidos
    Given Tester desea ingresar al login
    When Tester ingresa "jrivas" como usuario y "123456" como contraseña
    Then Tester verifica que no puede accder al aplicativo