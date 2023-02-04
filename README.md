# What's Your Budget?
### A ThinkScript for ThinkOrSwim

##### build 0003
##### v.0.0.3 alpha

#

![Budget Labels](https://i.imgur.com/6i0qTwG.png)
#

Description:

Are you sick of always using a calculator for calculating the proper share size that fits within your budget? Are you often letting your cockiness emotions take over and always over doing your share size? So was I, but now no more! I present What's Your Budget indicator!

A label-based indicator that automatically calculates your budget limit by rounding up shares you can afford within your price range - very useful for you cocky gamblers. Extra feature: See your max loss and max gain that you should follow (ratio 3:1 is default) - must be adjusted accordingly to your risk tolerance!!

# 

## Budget:

#

Simple math formula for estimate share amount based on your $ budget amount:

  - P.E.M.D.A.S applies to the formulas!
    - P.E.M.D.A.S = Paranthesis, Exponents, Multiplication, Division, Addition, Subtraction



Budget / 100% = Round Share Quantity Purchase Limit ÷ 1

Budget / 66% = (Round Share Quantity Purchase Limit x 2) ÷ 3

Budget / 33% = Round Share Quantity Purchase Limit ÷ 3


EXAMPLE: 

My budget is $2,500.

The ticker price is $3.36 per share.

Budget / 100% = 739.64
- Formula: 2,500 ÷ 3.38 = ~ 739.64497
    - Automatically rounded out to 739.64
    
Budget / 66% = 493.10
- Formula: (2,500 ÷ 3.38) ÷ 3 x 2 =  ~ 493.096647
  - Automatically rounded out to 439.10

Budget / 33% = 246.55 
- Formula: (2,500 ÷ 3.38) ÷ 3 = ~ 246.548323
  ` Automatically rounded out to 246.55

#

### Max Gain and Max Loss Labels:

#

If you want to modify the Max Gain / Max Loss, you msut modify the input in the Settings section!

Default input:

input gain = 3;
input loss = 25;

Input formulas:

Max Gain = 3, so (2500 * 3) ÷ 25 = 300 
Max Loss = 25, so 2500 ÷ 25 = 100

#

## Settings:

![Budget Settings](https://i.imgur.com/iLVfjTw.png)

  - Set budget $ amount
  - Choose to toggle seeing shares that you can purchase at current price based on your budget
  - Choose your max loss, and max gain amount for the day based on your risk-to-reward ratio

...

You may modify colors in the script itself - I need to implement color customization.

As of now, ysing default ThinkOrSwim colors... Color.plum , Color.violet, and Color.cyan

Change color.xxxxx to set thinkorswim's own colors

Reference: [ThinkOrSwim](https://tlc.thinkorswim.com/center/reference/thinkScript/Constants/Color)

#

...
 
 If I helped just one person, I'd die a happy man! :)
 
...


Please let me know of other math forumlas you may find more effective!

Thank you!
