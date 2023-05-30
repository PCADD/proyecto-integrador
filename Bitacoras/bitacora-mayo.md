# PROYECTO INTEGRADOR - GRUPO PCADD - MAYO
## *MARTES, 2 DE MAYO*   
Empezamos a instalar sistemas y haciendo la tarea del trello
## *MIÉRCOLES, 3 DE MAYO*   
En el día de hoy, 3 de mayo, terminamos de instalar los sistemas operativos en los servidores y empezamos a instalar los sistemas operativos de los clientes, mientras que otros integrantes empezábamos a instalar el cableado de red desde el rack hacia los equipos, iniciando el proceso de crimpar los cables en el patch panel.
## *JUEVES, 4 DE MAYO*
Continuamos crimpando cables y añadimos el patch panel al rack. Además arreglamos errores de repositorios en los servidores de Debian.
## *VIERNES, 5 DE MAYO*
Hoy hemos crimpado un cable que nos hacía falta.  Además organizamos y colocamos de forma ordenada los cables.  
Mientras otros compañeros creaban y configuraban las máquinas de virtualbox.
## *MARTES, 9 DE MAYO*
Continuamos crimpando cables e instalamos los servidores virtualizados (a excepción de la cabina de discos)
## *MIÉRCOLES, 10 DE MAYO*
En el día de hoy, miércoles 10 de mayo, parte del grupo investigamos como configurar las vlans al mismo tiempo que intentábamos arreglar algunos errores que nos daba virtualbox mientras otros se dedicaban a elaborar documento con todos los nombres de servidores y contraseñas.
## *JUEVES, 11 DE MAYO*
Empezamos la configuración de vlans, decidimos cambiar la organización de los cables porque había quedado más desordenado de lo que esperábamos (y empezamos a reorganizarlos) y cambiamos los nombres de usuario y de equipo de servidores fisicos, virtualizados y clientes.
## *VIERNES, 12 DE MAYO*
Hemos terminado de configurar las vlans (a excepción del dchp, pero al asignar IPs estáticas si funciona internet). Además, hemos instalado el dominio en el servidor principal y hemos crimpado más cables.
## *LUNES, 15 DE MAYO*
Acabamos de configurar y de encontrar los fallos que teniamos en las vlans, finalmente, creamos las reglas del firewall y creamos los servidores dhcp, por lo 
que actualmente tenemos conexion a internet en todas las vlans. Tambiem empezamos a instalar el dominio y el enrutamiento, como a su vez el script de creacion 
de usuarios.
## *MARTES, 16 DE MAYO*
Hemos realizado las siguientes tareas: 
- Se han detectado errores en la creación y configuración de las VLAN, debido a que algunos equipos no se podian conectar a internet, por lo que se ha procedido a su corrección. Actualmente todos los equipos tienen conexión a internet y estan configurados por DHCP. 
- Elaboración del script para añadir usuarios al servidor empresarial DELL 1, el script se ha logrado terminar y hay que aplicarlo al servidor. 
- Configuración del enrutamiento del servidor empresarial y asignación de tarjetas de red.
- Instalación y configuración inicial del servidor de datos TrueNAS y primera creación de prueba de RAIDz2.
- Se ha seguido actualizando el TRELLO añadiendo tareas, finalizando otras, etc.
## *MIÉRCOLES, 17 DE MAYO*
Hemos realizado las siguientes tareas:
- Reinstalación del servidor de monitorización 
- Instalación de Zabbix
- Utilizar script para crear los usuarios y añadirlos a los ggs
- Investigar como acceder al switch cisco para crear vlans y configurar el bonding
- Resetear el switch cisco
## *JUEVES, 18 DE MAYO*
El día de hoy el grupo nos dedicamos a ralizar las siguentes tareas, mientras que dos del grupo continuamos investigando cómo compartir el Raidz2 desde el TrueNas al servidor de datos, no teniendo éxito por el momento, mientras que otros miembros del grupo se dedicaban a arreglas las VLAN y configurar el switch de cisco.
## *VIERNES, 19 DE MAYO*
Arreglamos las VLAN en el switch de cisco , mientras otros compañeros estaban configurando  el TrueNas con ISCSI.
## *LUNES, 22 DE MAYO*
Ya que desde el principio no organizamos muy bien los cables, nos dedicamos a quitarlos, reorganizarlos y etiquetarlos, tambien asignamos cada cable de red a su correspondienrte equipo. Tambien posimos a funcionar el sai y configuramos ciertos parametros de algunos clientes Windows que nos quedaban.
## *MARTES, 23 DE MAYO*
Se han corregido errores del enrutamiento en el servidor empresarial en DELL 1 y se ha colocado ip correcta en el servidor empresarial de DELL 2. Se ha configurado zabbix para tenerlo listo.
## *MIÉRCOLES, 24 DE MAYO*
Mientras unos compañeros acababan de unir los clientes restantes al servidor, otra compañera se dedicaba a configursr el SAI, mientras que otra parte del grupo investigaba como compartir la carpeta, pero debido a un corte en la luz, únicamente se pudo adelantar cosas del proyecto durante la primera hora.
## *JUEVES, 25 DE MAYO*
Descargamos el software necesario para configurar el SAI e investigamos cómo configurarlo. Además, colocamos los equipos para que el SAI quede conectado a todos los servidores.
## *VIERNES, 26 DE MAYO*
Crimpamos un cable que nos hacía falta.
Mientras otro compañero configuraba dos switches.
También conseguimos configurar el SAI aunque hacen falta unas pequñas modificaciones.
Asimismo una compañera intentaba cambiar la dirección IP de la máquina del servidor empresarial.
## *MARTES, 30 DE MAYO*
Hemos tenido algunos problemas con la red, ningun equipo podia acceder a internet o estaba bloqueado. Hemos solucionado dicho problema para que los diferentes equipos de nuestra sede esten conectados correctamente en la red.
Se ha logrado compartir la carpeta de la cabina de discos al servidor de datos via ISCSI.
Hemos podido corregir el error de ip duplicada en el servidor secundario y se ha colocado una ip estática para poder realizar la configuración de servidor secundario.
Se ha hecho documento donde se ha especificado la info de los equipos, a una carpeta compartida en la nube.
Se ha empezado a añadir equipos a zabbix para monitorizarlos.
