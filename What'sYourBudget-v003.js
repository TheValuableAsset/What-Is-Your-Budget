#######################################
#                                     #
#        What's Your Budget?          #
#   	   v.0.0.3 alpha             #
#                        #
# 	   Made by TheValuableAsset  	    #
#									                    #
#######################################

#######################################
#              Options                #
#######################################

### Budget ###

input budget = 2500.00;

# Overall budget has three set prices based upon the budget price.

# 100% of Budget
# 66% of Budget
# 33% of Budget

# Example: Budget set to 2500, so 33% of Budget is 833.33, while 66% of Budget is 1650, and of course, 100% of Budget is 2500 obviously.

### Max Loss & Max Gain ###

input loss = 25;
input gain = 3;

# Max Loss = 25, so 2500 / 25 = 100 #
# Max Gain = 3, so 2500 / 25 * 3 = 300 #

# Example: Budget is set to 7500, so it's Max Loss is 300, while the Max Gain is 900.

#######################################
#               Budget                #
#######################################

# input budget = 2500.00;

def na = Double.NaN;
def current_price = close;
def Share_Quantity_purchase_limit =  Budget / current_price;
input current_number_of_shares_that_you_can_purchase_at_the_current_price = Yes;

#######################################
#           Budget Labels             #
#######################################

AddLabel(current_number_of_shares_that_you_can_purchase_at_the_current_price, Concat("Budget/100% = ", Round(Share_Quantity_purchase_limit / 1)) ,Color.plum);
AddLabel(current_number_of_shares_that_you_can_purchase_at_the_current_price, Concat("Budget/66% = ", Round(Share_Quantity_purchase_limit / 3 * 2)) , Color.violet);
AddLabel(current_number_of_shares_that_you_can_purchase_at_the_current_price, Concat("Budget/33% = ", Round(Share_Quantity_purchase_limit / 3)) , Color.cyan);

# AddLabel(tick_value, GetSymbol() + " [Tick Size] : " +  TickSize() + " [P/L tick value] : " + Round(TickValue() * Share_Quantity_purchase_limit) , Color.orange);

#######################################
#             Max Labels              #
#######################################

AddLabel(budget, Concat("Max Gain = ", (budget / 25 * gain) ), Color.green);
AddLabel(budget, Concat("Max Loss = ", (budget / loss)) , Color.red);

#######################################
#               Colors                #
#######################################

DefineGlobalColor("orange" , CreateColor(255, 152, 0));
DefineGlobalColor("red" , CreateColor(255, 0, 0));
DefineGlobalColor("blue" , CreateColor(8, 168, 253));
DefineGlobalColor("light_blue" , CreateColor(6, 134, 202));
DefineGlobalColor("cyan" , CreateColor(4,100,151));
