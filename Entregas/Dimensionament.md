# Dimensionament dels servidors

- Dell 1 (Debian 11.6 con entorno gráfico)
  - Servidor empresarial
    - Windows Server 2022 Standard
    - RAM: 4GB
    - DISCO DURO: 100 GB
    - NÚCLEOS: 2
    - 1 tarjeta de red en Adaptador puente a enx7cc2c6435eeb
  
  - Servidor cabina de discos
    - Debian 11.6
    - RAM: 4GB
    - DISCO DURO: 
      - 2 discos de 50GB
      - 4 discos de 20GB
    - NÚCLEOS:1
    - 1 tarjeta de red en Adaptador puente a eno1
    - 1 tarjeta de red en Adaptador puente (para el SAN)

- Dell 2 (Debian 11.6 con entorno gráfico)
  - Servidor empresarial secundario
    - Windows Server 2022 Standard sin entorno gráfico
    - RAM: 2GB
    - DISCO DURO: 50GB
    - NÚCLEOS:2
    - 1 tarjeta de red en Adaptador puente a eno1
    
  - Servidor de aplicaciones
    - Windows Server 2022 Standard
    - RAM: 6GB
    - DISCO DURO: 100GB
    - NÚCLEOS: 2
    - 1 tarjeta de red en Adaptador puente a enx7cc2c611485a
    
  - Servidor de monitorización
    - Debian 11.6 sin entorno gráfico (Zabbix)
    - RAM: 2GB
    - DISCO DURO: 30GB
    - NÚCLEOS: 2
    - 1 tarjeta de red en Adaptador puente a enx7cc2c6121673
    
- Dell 3 (8gb) (Debian 11.6 con entorno gráfico)
  - Servidor web Intranet
    - Debian 11.6
    - RAM: 2GB
    - DISCO DURO: 100GB
    - NÚCLEOS:1
    - 1 tarjeta de red en Adaptador puente a enx7cc2c6121696
    
  - Servidor de datos 
    - Windows Server 2022 Standard
    - RAM: 2GB
    - DISCO DURO: 50 GB
    - NÚCLEOS: 2
    - 1 tarjeta de red en Adaptador puente a eno1
    - 1 tarjeta de red en Adaptador puente a enx08beac249f52 (SAN)

  - DMZ
    - Debian 11.6 sin entorno gráfico 
    - RAM: 2GB
    - DISCO DURO: 20gb
    - NÚCLEOS: 2
    - 1 adaptador de red en NAT
