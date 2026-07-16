import { Card, CardContent, Stack } from "@mui/material";
import { useState } from "react";

import IconText from "../../molecules/IconText/Icontext";
import TextPair from "../../molecules/TextPair/TextPair";
import SliderGroup from "../../molecules/SliderGroup/SliderGroup";
import RateInfo from "../../molecules/RateInfo/RateInfo";

import Divider from "../../atoms/Divider/Divider";
import Button from "../../atoms/Button/Button";

const MAX_AMOUNT = 880000;

const DEFAULT_SELECTED_AMOUNT = 283442.64;
const DEFAULT_RATE = 12;

function SummaryCard() {
  const [selectedAmount, setSelectedAmount] = useState(
    DEFAULT_SELECTED_AMOUNT
  );

  const handleSliderChange = (value: number) => {
    setSelectedAmount(value);
  };

  const handleReset = () => {
    setSelectedAmount(DEFAULT_SELECTED_AMOUNT);
  };

  const handleReview = () => {
    alert("Review Your Credit");
  };

  // Calculations
  const rateAmount =
    (selectedAmount * DEFAULT_RATE) / 100;

  const payBackAmount =
    selectedAmount + rateAmount;

  const totalPayout =
    payBackAmount - rateAmount;

  return (
    <Card
      sx={{
        width: 360,
        bgcolor: "background.paper",
        borderRadius: 4,
        p: 2,
      }}
    >
      <CardContent>
        <Stack spacing={3}>

          <IconText text="Summary" />

          <TextPair
            label="Term"
            value="12 months"
          />

          <TextPair
            label="Selected contracts"
            value="3"
          />

          <SliderGroup
            selectedAmount={selectedAmount}
            maxAmount={MAX_AMOUNT}
            onSliderChange={handleSliderChange}
            onReset={handleReset}
          />

          <TextPair
            label="Pay back amount"
            value={`$${payBackAmount.toLocaleString(
              undefined,
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            )}`}
          />

          <RateInfo
            label="Rate %"
            percentage="12.00%"
            amount={`$${rateAmount.toLocaleString(
              undefined,
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            )}`}
          />

          <Divider />

          <TextPair
            label="Total Payout"
            value={`$${totalPayout.toLocaleString(
              undefined,
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            )}`}
            valueVariant="h6"
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handleReview}
          >
            Review Your Credit
          </Button>

        </Stack>
      </CardContent>
    </Card>
  );
}

export default SummaryCard;