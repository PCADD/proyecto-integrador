# BITÁCORA PERSONAL

## VIERNES, 24 DE MARZO
He desmontado junto a mis compañeros lo que habían utilizado los de 2º para su proyecto y hemos organizado el espacio de trabajo

## *MARTES, 4 DE ABRIL*
Todos hemos realizado el inventario de los equipos disponibles del laboratorio

## *MIÉRCOLES, 5 DE ABRIL*
Todos hemos reseteado el router TP-Link y aprendimos a configurarlo para el proyecto

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

## *JUEVES, 1 DE JUNIO*
He creado las siguientes directivas: 
  - Desactivación del acceso a la terminal para el personal técnico
  - Prohibición de acceso a los dispositivos USB a todo el personal excepto a los gerentes
Junto a César, he empezado a configurar algunas cosas del DMZ en el microtik:
  - Creación de la interfaz
  - Creación de la VLAN
  - Asignación de IPs
Además, hemos investigado cómo configurar el firewall
También, entre todos, hemos organizado las diferentes páginas de la intranet y he empezado a hacer las mías. También, junto a David, he realizado la plantilla básica y el logo. 

## *VIERNES, 2 DE JUNIO*
He creado el esquema de red (ya estaba en papel), he hecho capturas de la configuración de red para documentar y he modificado la política de copias de seguridad

## *LUNES, 5 DE JUNIO* 
- He organizado las tareas del trello (he etiquetado las que estaban creadas y sin etiquetar, he asignado las que no estaban asignadas y he creado las que faltaban)
- He creado las siguientes directivas:
  - Instalar para todos los usuarios de la empresa el Thunderbird
  - Instalar para los comerciales que lo deseen el navegador Firefox
- He investigado como configurar WSUS
- He investigado junto a César qué necesitamos configurar para que el DMZ muestre la intranet y hemos investigado como desplegar la intranet cuando la tengamos
- He hecho capturas de la configuración del tp link y del tp link del SAN para documentar la configuración de la red
- He revisado el documento 'dimensionament-servidors.md' creado por Paloma

## *MARTES, 6 DE JUNIO*
- He investigado como configurar el WSUS y lo he configurado (a excepción de añadir el servidor por un error del esquema de base de datos) y he añadido dos directivas necesarias para que los clientes utilicen al servidor para descargar las actualizaciones.
- He investigado cómo configurar el WDS y cómo compartir un disco iSCSI en TrueNAS
- He organizado tareas para el resto de días
- He arreglado algunos errores de la red de los servidores físicos (no tenían internet)

## *MIÉRCOLES, 7 DE JUNIO*
Junto a César, he realizado las siguientes tareas:
- He creado y compartido un disco iSCSI para guardar las ISOs 
- He empezado a configurar WDS (falta añadir las ISOs y configurar los clientes)
- He revisado que los cables están conectados como indica nuestro esquema (en el patch panel y switches)
- He modificado el documento dimensionament_servidors.md y modificado algunos nombres de equipos que faltaban por cambiar

## *JUEVES, 8 DE JUNIO*
He intentado configurar WDS (no hemos podido porque no sabíamos de donde obtener los archivos boot.wim e install.wim) y he continuado con la intranet: he ayudado a Paloma y a César con el html de sus páginas y he empezado el javascript de las páginas createUser y alterUser

## *VIERNES, 9 DE JUNIO*
He intentado arreglar errores:
- El servidor de aplicaciones no inicia, pero no hemos sabido arreglarlo
- No se puede crear la copia de seguridad en el recurso compartido NFS, pero no hemos conseguido arreglarlo
- He arreglado las directivas (estaba mal el ámbito)
- He encontrado el archivo necesario para configurar WDS, pero no he conseguido configurarlo porque Diego estaba usando ese servidor para el NFS
- He investigado como desplegar la intranet

## *lUNES, 12 DE JUNIO*
He desplegado la página (no terminada) web de la intranet en el servidor Intranet, y he seguido intentando configurar el WDS, pero nos da varios fallos al intentar añadir las imágenes de instalación. También he creado las reglas del firewall del DMZ en el microtik

## *MARTES, 13 DE JUNIO*
He continuado la implementación de la página web (pensaba que tenía que ser dinámica, y obviamente no estaba consiguiendo que me saliera nada) y he hecho el diseño de la página junto a David
## *MIÉRCOLES, 14 DE JUNIO*
He hecho la memoria que nos faltaba de Redes junto a César y hemos intentado desplegar la web en el DMZ, pero se ha ido el internet y no hemos podido.
