# MovieFlix - Bootcamp DevSuperior

# Observação sobre o frontend mobile
O frontend mobile não irá se comunicar com o backend se a BASE_URL for localhost, então é preciso que no lugar de localhost seja colocado o endereço IP da máquina local.

Então uma possibilidade é ir no arquivo: frontend-mobile/src/utils/requests.ts e na variável BASE_URL colocar o endereço IP ao invés de localhost.