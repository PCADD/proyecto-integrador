# BITÁCORA PERSONAL

## VIERNES, 24 DE MARZO
He desmontado junto a mis compañeros lo que habían utilizado los de 2º para su proyecto y hemos organizado el espacio de trabajo

## *MARTES, 4 DE ABRIL*
Todos hemos realizado el inventario de los equipos disponibles del laboratorio

## *MIÉRCOLES, 5 DE ABRIL*
Todos hemoes reseteado el router TP-Link y aprendimos a configurarlo para el proyecto

## *MARTES, 18 DE ABRIL*
Junto a David he elegido el sistema operativo de cada servidor, y cómo vamos a agrupar los servidores virtualizados en los servidores físicos.

## *JUEVES, 20 DE ABRIL*
Todos juntos hemos empezado a configurar el router TP-Link para configurar la red. Para ello hemos utilizado el programa Winbox:
  - Configuración de las interfaces y direcciones IP
  - Configuración sNAT para enmascarar
  - Configuración de ruta estática por defecto.

No hemos conseguido que funcione, no accede a Internet ni hace ping a la puerta de enlace

## *MIÉRCOLES, 26 DE ABRIL*
Continuamos configurando el router TP-Link.
Hemos encontrado dos errores en la configuración SOURCENAT:
  - El primero era que no seleccionamos la opción de sourcenat , nosotros lo pusimos a mano y en mayúscula.
  - El segundo error fue que en la máscara no pusimos la /24.
  Por último hemos conseguido que funcione el Microtik.
  
## *JUEVES, 27 DE ABRIL*
He realizado el esquema de red inicial junto a mis compañeros (sin direcciones ip)

## *VIERNES, 28 DE ABRIL*
He modificado algunas cosas de como organizar los servidores y he realizado la memoria de dimensionamiento de servidores.
  
## *MARTES, 2 DE MAYO*   
He añadido las tareas del trello y las he organizado por categorías. También he ayudado con la instalación de los sistemas operativos de los servidores físicos. 

## *MIÉRCOLES, 3 DE MAYO*   
He crimpado cables al patch panel junto a Diego y he instalado los sistemas operativos de algunos clientes.

## *JUEVES, 4 DE MAYO*
He arreglado los errores de repositorios en los servidores de Debian.

## *VIERNES, 5 DE MAYO*
He organizado y colocado de forma ordenada los cables junto a algunos de mis compañeros y he ayudado a configurar las máquinas de virtualbox para los servidores virtualizados

## *MARTES, 9 DE MAYO*
He instalado algunos de los servidores virtualizados: intranet, monitorización, empresarial, datos. Además, he ayudado a Paloma a instalar el resto.

## *MIÉRCOLES, 10 DE MAYO*
He solucionado los errores que nos daba virtualbox y he empezado a investigar como crear las vlans.

## *JUEVES, 11 DE MAYO*
He empezado la configuración de VLANs en el microtik junto a César. 

## *VIERNES, 12 DE MAYO*
Junto a César he terminado de configurar las vlans (a excepción del dchp, pero al asignar IPs estáticas si funciona internet). 

## *LUNES, 15 DE MAYO*
Junto a César he acabado de configurar y de encontrar los fallos que teniamos en las vlans. También hemos creado las reglas del firewall y los servidores dhcp, por lo que actualmente tenemos conexion a internet en todas las vlans. 

## *MARTES, 16 DE MAYO*
He arreglado más errores de las VLAN con César. Después de eso ya funciona internet correctamente (también dhcp). También he creado los ggs.

## *MIÉRCOLES, 17 DE MAYO*
He reinstalado el servidor de monitorización, he investigado como instalar zabbix y lo he empezado a instalar (no he empezado la configuración). También he investigado junto a César como acceder al switch cisco para crear vlans. También (junto a César) he reseteado el switch cisco.

## *JUEVES, 18 DE MAYO*
Junto a César, he modificado algunas cosas de las VLANs para poder crear las VLANs que tocaban en el switch cisco. Además, César y yo hemos empezado a configurar el switch de cisco (hemos empezado a crear las VLAN pero no funciona).

## *VIERNES, 19 DE MAYO*
Junto a César he seguido con la creación de VLANs en el switch de cisco y hemos arreglado los errores que tenían. Además, he hecho un documento con la siguiente información: equipos, las vlans a las que pertenecen, en qué switch se encuentran y sus respectivas IPs.

## *LUNES, 22 DE MAYO*
Junto a César he reorganizado los cables del patch panel y hemos organizado los puertos de los switches (básicamente hemos puesto en práctica el documento anterior). También junto a ellos he asignado cada cable de red a su correspondiente equipo y hemos colocado los servidores en el suelo.

## *MARTES, 23 DE MAYO*
He corregido los errores de enrutamiento del servidor empresarial junto a César, hemos empezado a modificar las IPs de los servidores virtualizados (a una ip estática) y hemos añadido algunos clientes al dominio.

## *MIÉRCOLES, 24 DE MAYO*
Junto a César terminé de añadir los clientes al dominio.

## *JUEVES, 25 DE MAYO*
Junto a César, he creado algunas reglas en el firewall del Microtik para las VLANs (cuáles se tienen que comunicar y cuáles no)

## *VIERNES, 26 DE MAYO*
He intentado realizar la configuración de red del servidor empresarial secundario para hacerlo Backup Domain Controller, pero no he podido cambiar la IP a una estática.

## *LUNES, 29 DE MAYO*
Junto a César, he investigado cómo configurar el SAN, hemos conectado el servidor de cabina de discos y el de datos al switch SAN y lo hemos configurado para que funcione. También hemos intentado configurar el tp link para que le de por dhcp una ip estática al servidor empresarial secundario, pero no hemos podido.

## *MARTES, 30 DE MAYO*
He realizado las siguientes tareas:
  - He cambiado algunas cosas que habíamos modificado en el microtik y el tplink ayer para la ip estática del servidor empresarial, que impedía que los servidores tuvieran internet
  - He configurado el servidor empresarial secundario para que sea controlador de dominio secundario
  - He intentado configurar el DFS en el servidor empresarial, pero me ha dado erroes porque había que crearlo en el servidor de datos
  - He empezado a configurar el DFS en el servidor de datos.
  - He cambiado la configuración de los servidores para que no se apagen o entren en suspensión cuando pase cierto tiempo

## *MIÉRCOLES, 31 DE MAYO*
He configurado el DFS entre el servidor de datos y el servidor empresarial. Además, he instalado el agente de Zabbix en el servidor de datos para poder añadirlo al servidor de monitorización y he instalado el sistema operativo del DMZ.
