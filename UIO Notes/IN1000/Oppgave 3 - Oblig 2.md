```python
1 def print_prosa(): # legger en her, fordi den starter med å definere funksjonen
	4,9 print("Melding til alle gaardeiere:") # blir kalt i "linje" 3 og 8
	5,10 print("Antall dyr paa gaarden: ") # ^^^

2 antall_dyr = 4 
3 print_prosa() # kaller en
5 print(antall_dyr) 
6 antall_nye_dyr = int(input("Hvor mange nye dyr kommer til gaarden:")) 
7 antall_dyr = antall_dyr + antall_nye_dyr 
8 print_prosa() # kaller en for andre gang
11 print(antall_dyr)

12 if antall_dyr > 12: 
	13 print("Det er mer enn ett dusin dyr paa gaarden!")
13 elif antall_dyr == 12: # valgte å bruke 13 igjen fordi det er ikke nødvendigvis at nr 13 kjører og da blir dette nr 13
	14 print("Det er ett dusin dyr paa gaarden!") 
14 else: # se linje 13 nr 2
	15 print("Det er mindre enn ett dusin dyr paa gaarden!")

```