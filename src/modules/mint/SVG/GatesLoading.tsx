import { isFunction } from "lodash";
import React, { useCallback, useRef } from "react";

interface Props {
  onAnimationFinished?: () => void;
  withoutGreenPath?: boolean;
}

export default function GatesLoading({
  onAnimationFinished,
  withoutGreenPath = false,
}: Props): React.ReactElement {
  const greenPath = useRef();

  const handleFinish = useCallback(async () => {
    if (isFunction(onAnimationFinished)) onAnimationFinished();
  }, [onAnimationFinished]);

  return (
    <>
      <style jsx>{`
        @keyframes dash {
          from {
            stroke-dashoffset: 4599.75537109375;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .greenPath {
          stroke-dasharray: 4599.75537109375;
          stroke-dashoffset: 4599.75537109375;
          animation: dash 5s linear forwards;
        }
      `}</style>
      <svg
        width="876"
        height="868"
        viewBox="0 0 876 868"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M437.801 360C536.936 360 617.301 279.635 617.301 180.5C617.301 81.3649 536.936 1 437.801 1C338.666 1 258.301 81.3649 258.301 180.5C258.301 279.635 338.666 360 437.801 360Z"
          stroke="#F2F2F2"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <path
          d="M605.801 421.699C704.936 421.699 785.301 341.379 785.301 242.299C785.301 143.22 704.936 62.8994 605.801 62.8994C506.666 62.8994 426.301 143.22 426.301 242.299C426.301 341.379 506.666 421.699 605.801 421.699Z"
          stroke="#F2F2F2"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <path
          d="M259.002 655.6L437.802 720.7L616.602 655.6L711.702 490.8L678.702 303.4L532.902 181.1H342.702L196.902 303.4L163.902 490.8L259.002 655.6Z"
          stroke="#F2F2F2"
          strokeMiterlimit="10"
        />
        <path
          d="M316.802 586.8L252.402 475.2L274.702 348.4L373.402 265.6H502.202L600.902 348.4L623.202 475.2L558.802 586.8L437.802 630.8L316.802 586.8Z"
          stroke="#F2F2F2"
          strokeMiterlimit="10"
        />
        <path
          d="M874.595 397.804C874.976 298.724 794.964 218.095 695.884 217.715C596.805 217.334 516.176 297.345 515.795 396.425C515.414 495.505 595.426 576.134 694.505 576.515C793.585 576.895 874.214 496.884 874.595 397.804Z"
          stroke="#F2F2F2"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <path
          d="M664.406 752.601C763.485 752.49 843.716 672.081 843.606 573.001C843.495 473.921 763.085 393.69 664.005 393.801C564.925 393.911 484.695 474.321 484.806 573.401C484.916 672.481 565.326 752.711 664.406 752.601Z"
          stroke="#F2F2F2"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <path
          d="M527.665 867.506C626.745 867.255 706.862 786.731 706.61 687.651C706.359 588.572 625.835 508.455 526.755 508.706C427.675 508.957 347.559 589.481 347.81 688.561C348.062 787.641 428.585 867.757 527.665 867.506Z"
          stroke="#F2F2F2"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <path
          d="M527.77 688.374C527.902 589.294 447.689 508.866 348.609 508.734C249.529 508.602 169.102 588.815 168.97 687.895C168.838 786.975 249.051 867.402 348.13 867.534C447.21 867.667 527.638 787.453 527.77 688.374Z"
          stroke="#F2F2F2"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <path
          d="M390.834 573.551C391.006 474.471 310.825 394.011 211.745 393.839C112.665 393.667 32.2059 473.848 32.0339 572.928C31.862 672.008 112.043 752.467 211.123 752.639C310.203 752.811 390.662 672.63 390.834 573.551Z"
          stroke="#F2F2F2"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <path
          d="M180.4 576.5C279.48 576.5 359.8 496.18 359.8 397.1C359.8 298.02 279.48 217.7 180.4 217.7C81.3203 217.7 1 298.02 1 397.1C1 496.18 81.3203 576.5 180.4 576.5Z"
          stroke="#F2F2F2"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <path
          d="M449.058 250.653C453.634 151.682 377.067 67.7386 278.041 63.1602C179.015 58.5818 95.0291 135.102 90.4533 234.073C85.8774 333.044 162.444 416.987 261.471 421.565C360.497 426.144 444.483 349.624 449.058 250.653Z"
          stroke="#F2F2F2"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <path
          d="M664.4 573.1L528.6 488.2C517.7 481.4 512 468.6 514.3 456L514.4 455.6C516.6 442.9 526.3 432.9 538.9 430.2L695.5 396.8L537.4 419C524.7 420.8 512.1 414.7 505.7 403.5L505.3 402.8C498.9 391.7 499.8 377.7 507.8 367.6L606.1 241.7L499.4 360.1C490.8 369.7 477.2 373 465.2 368.6L464.3 368.3C452.2 363.9 444 352.6 443.6 339.8L438 180.5L432.4 339.8C431.9 352.7 423.7 363.9 411.7 368.3L410.8 368.6C398.7 373 385.2 369.6 376.6 360.1L269.9 241.7L368.2 367.6C376.1 377.7 377.1 391.7 370.7 402.8L370.3 403.5C363.9 414.6 351.3 420.8 338.6 419L180.5 396.8L337.1 430.2C349.7 432.9 359.4 442.9 361.6 455.6L361.7 456C363.9 468.7 358.3 481.4 347.4 488.2L211.6 573.1L353.4 497.8C364.8 491.8 378.6 493.2 388.5 501.5L388.6 501.6C398.5 509.9 402.3 523.3 398.3 535.5L348.7 688.2L409 539.2C413.8 527.3 425.4 519.5 438.3 519.5C451.2 519.5 462.7 527.3 467.6 539.2L527.9 688.2L478.3 535.5C474.3 523.3 478.2 509.9 488 501.6L488.1 501.5C498 493.2 511.8 491.8 523.2 497.8L664.4 573.1Z"
          fill="white"
        />
        <path
          d="M187.201 157.1C190.501 153.7 194.601 153.5 198.801 154C200.801 154.3 202.901 154.6 204.401 156.3C205.201 157.2 206.001 158.1 206.701 159C209.401 162.4 209.201 168.1 204.701 171.2C204.101 171.6 203.501 172.3 203.201 173C202.701 174.1 203.201 174.7 204.401 174.7C206.301 174.7 208.201 174.7 210.001 174.6C214.701 174.3 219.401 174.3 224.101 174.8C226.001 175 227.901 175.1 229.701 175.6C232.801 176.4 234.601 178.7 235.901 181.5C236.901 183.8 235.301 186.4 232.801 186.6C231.301 186.7 229.701 186.4 228.101 186.2C227.101 186.1 226.801 185.4 226.801 184.4C226.801 184 226.901 183.7 226.901 183.3C227.201 180.8 226.001 178.9 223.601 178.2C220.401 177.3 217.001 177.5 213.701 177.5C210.301 177.5 206.801 177.6 203.401 177.6C200.601 177.6 197.901 177.6 195.101 177.6C191.701 177.5 188.801 176.2 186.201 174.1C183.401 171.7 182.301 168.5 182.301 165C182.301 162 184.101 159.9 186.101 158C186.501 157.6 186.901 157.3 187.201 157.1ZM198.701 159.6C198.501 159.4 198.101 158.9 197.801 158.5C196.601 156.8 194.901 156.8 193.301 157.2C191.701 157.6 190.401 158.6 190.001 160.2C189.301 163.3 189.501 166.3 191.401 169C192.301 170.3 193.401 171.6 194.601 172.7C196.901 174.9 199.601 174.3 200.701 171.3C202.201 167.2 202.101 163.2 198.701 159.6Z"
          fill="white"
        />
        <path
          d="M61 367.9C61.6 365.8 63 364.4 64.3 363C64.8 362.5 65.5 362.5 66 363.1C66.3 363.4 66.5 363.7 66.7 364C69.5 368.9 72.4 373.9 75.2 378.8C76.7 381.5 78.3 384.2 79.7 387.1C80.9 389.5 82.8 391 84.8 392.5C85.8 393.3 87.1 393.2 88.2 392.9C91 392.1 92.9 390 93.7 387.4C94.2999 385.3 93.9001 382.9 92.4001 381C91.5001 379.9 90.5001 378.8 89.6001 377.7C88.0001 375.9 87.7 374.6 88.7 372.4C89.4 370.9 90.1 369.3 91.7 368.4C93 367.7 94.4 367.6 95.3 369C96.1 370.3 97.2001 371.4 97.9001 372.7C98.6001 374 99 375.5 99.3 376.9C99.6 378.6 99.6 380.3 99.7 382C99.7 382.2 99.7001 382.5 99.6001 382.7C98.5001 385.3 97.7001 388 96.3 390.5C94.8 393.1 92.6 395.2 90.2 397C88.6 398.1 87.0001 398.9 85.1001 399.2C84.6001 399.3 84.1001 399.4 83.6001 399.5C79.2001 400.3 79.1001 400.2 76.6001 396C73.3001 390.4 70.4 384.6 67 379C65.3 376.2 63.7001 373.4 62.1001 370.6C61.5001 369.7 61.3 368.7 61 367.9Z"
          fill="white"
        />
        <path
          d="M582.7 786.8C582.8 787.4 583 788 583 788.6C583.1 791.9 584.3 794.7 586.5 797C587 797.6 587.9 798.1 587.5 799C587.1 800.1 586 799.8 585.2 799.7C583.2 799.5 581.1 799.3 579.1 798.7C576.8 798.1 575.9 796.7 575.8 794.3C575.7 791.9 575.7 789.6 575.6 787.2C575.5 784 572 780.5 568.2 782C567 782.5 565.9 782.8 565 783.9C563.3 786 562.9 788.4 564.3 790.7C565.9 793.3 564.1 796.5 562.4 797.6C562 797.9 561.3 798.1 560.8 798C557.8 797.4 554.9 796.6 553.7 793.3C552.9 791.3 552.5 789.2 553.5 787.1C553.8 786.4 554.2 785.7 554.5 785.1C555 784 555 783.8 554.1 783C552.2 781.4 550.4 779.8 548.6 778.2C546.5 776.5 544.5 774.8 542.3 773.1C540.5 771.7 539 770 538.3 767.8C537.9 766.6 537.9 765.5 538.4 764.3C539.2 762.6 540.5 762.3 541.8 763.6C542.7 764.5 543.6 765.5 544.2 766.7C545.6 769.3 547.7 771.4 549.7 773.6C551.9 776.1 554.4 778.4 556.8 780.8C557.7 781.7 558 781.7 558.8 780.9C560.1 779.4 562 778.7 563.8 778.5C567.6 778 571.5 778 575.1 779.5C578.7 781 581.3 783.3 582.7 786.8Z"
          fill="white"
        />
        <path
          d="M752.002 644.3C747.502 642 745.802 638.2 745.102 633.9C744.702 631.9 744.602 629.8 744.202 627.8C743.902 625.7 743.202 625.3 741.402 626.3C737.602 628.4 733.702 628.3 729.802 626.6C728.402 626 727.202 624.6 726.302 623.3C724.002 619.8 724.202 614.7 727.902 611.7C729.502 610.4 731.402 609.2 733.402 608.5C737.502 607.1 741.602 607.8 745.202 610.1C746.902 611.2 747.702 613.1 748.302 614.9C748.602 615.7 748.702 616.6 748.902 617.5C749.202 619 749.902 619.3 751.302 618.7C752.702 618.1 754.002 617.4 755.502 617C758.302 616.2 761.102 615.6 763.902 615C764.902 614.8 765.902 614.9 766.902 615C771.902 615.5 774.902 618.2 776.202 623.2C777.202 627.1 773.802 630.4 769.902 629.3C769.502 629.2 769.102 628.8 769.002 628.5C768.702 627.6 768.502 626.7 768.202 625.8C767.902 624.7 767.702 623.5 767.202 622.4C766.302 620.3 764.702 619.2 762.402 618.9C759.302 618.5 756.302 619.2 753.402 620.3C752.802 620.6 752.202 620.9 751.502 621.2C749.302 622.3 749.202 622.4 749.502 624.9C749.802 626.9 750.102 629 750.302 631C750.602 634.1 751.902 636.8 753.502 639.4C755.002 641.8 758.402 643.4 762.302 642.1C763.002 641.9 763.702 641.7 764.502 641.7C765.402 641.7 766.002 642.4 766.002 643.3C766.102 644.1 765.402 644.4 764.902 644.6C761.902 645.5 758.902 646.4 755.702 645.8C754.502 645.6 753.002 645.2 752.002 644.3ZM739.102 612.4C737.502 611.4 734.902 611.3 733.602 612.4C732.002 613.7 731.402 615.4 731.902 617.4C732.102 618.2 732.302 619 732.602 619.7C734.002 623.2 737.202 624.8 740.802 623.7C742.602 623.2 743.402 622 743.102 620.2C742.902 619.1 742.702 618 742.202 617C741.502 615.3 740.802 613.5 739.102 612.4Z"
          fill="white"
        />
        <path
          d="M809.003 362.2C810.303 362.8 811.303 363.6 811.803 364.8C812.503 366.6 813.203 368.4 813.903 370.2C815.203 373.2 814.603 376.2 813.603 379C812.303 382.3 810.503 385.3 807.303 387.2C804.603 388.8 801.803 388.8 799.303 386.9C799.103 386.7 798.903 386.6 798.703 386.4C797.503 385.6 797.103 385.6 796.203 386.8C795.003 388.5 793.503 389.7 791.903 390.9C789.103 393.1 786.203 392.7 783.203 391.5C782.203 391.1 781.303 390.3 780.403 389.6C779.003 388.4 778.503 388.3 777.403 389.8C775.003 393.1 772.703 396.5 770.403 399.8C769.903 400.6 769.303 401.3 768.703 402C767.903 403 766.803 403.2 765.903 402.7C764.903 402.1 764.403 400.8 764.903 399.6C765.803 397.2 767.603 395.4 769.403 393.6C771.503 391.5 773.603 389.3 775.703 387.2C776.903 386.1 777.203 384.8 776.703 383.3C776.003 381.1 776.503 379.1 777.303 377.1C778.003 375.4 779.403 374.1 780.803 373C782.203 371.9 784.003 371.9 785.603 372.4C787.903 373.1 788.803 376.7 787.303 378.8C787.003 379.3 786.503 379.6 786.203 380.1C784.503 382.2 785.003 384.8 787.503 385.9C790.003 387 792.403 386.9 794.503 385C795.703 383.9 795.903 383 795.303 381.5C794.703 380.1 794.103 378.6 793.503 377.2C793.103 376.3 793.303 375.6 793.803 374.9C794.703 373.7 795.603 372.5 796.603 371.4C797.503 370.4 798.303 370.6 798.603 371.9C799.003 373.3 799.203 374.7 799.403 376.2C799.803 379 801.603 380.7 804.003 381.9C804.403 382.1 804.803 382.2 805.203 382.3C807.503 383.1 809.703 381.7 809.803 379.3C809.903 376.6 808.903 374.2 807.303 372C806.503 370.9 805.903 369.7 805.203 368.5C804.803 367.8 804.803 367 805.303 366.4C806.503 364.9 807.803 363.6 809.003 362.2Z"
          fill="white"
        />
        <path
          d="M674.299 143C676.299 144.2 677.399 146.2 678.699 147.9C679.499 149 679.899 150.5 680.099 151.9C680.299 154.4 680.599 157 680.199 159.4C679.299 165.4 674.099 169.8 667.699 169.6C666.099 169.6 664.599 169.4 662.999 169.3C660.999 169.2 660.599 169.5 660.199 171.4C659.499 174.8 659.799 178.1 659.899 181.5C659.999 184.2 660.099 187 659.899 189.7C659.799 191.2 659.299 192.6 658.999 194.1C658.799 194.9 658.299 195.1 657.599 194.9C655.199 194.2 653.699 192.6 654.199 190.1C655.199 184.6 655.899 179 656.799 173.4C656.999 172 657.599 170.6 657.399 169.2C657.199 168.1 657.099 167 655.899 166.5C652.499 165.1 651.399 159.4 653.399 156.1C653.799 155.5 654.199 155 654.599 154.4C655.699 153 656.999 152.6 658.699 153C660.399 153.4 661.199 154.5 661.499 156.1C661.799 157.6 661.899 159.1 662.099 160.6C662.199 162.1 662.899 162.9 664.399 163C666.299 163.1 668.199 162.8 669.899 161.9C670.299 161.7 670.699 161.4 671.099 161.3C673.399 160.8 674.899 159.3 676.299 157.5C677.899 155.4 677.499 152.8 675.299 151.3C673.099 149.8 670.699 148.5 668.099 147.8C666.999 147.5 665.999 147.1 664.999 146.6C663.899 146 663.299 145 663.399 143.7C663.499 142.4 663.499 141.1 663.599 139.8C663.699 138.2 664.599 137.5 666.099 137.9C666.799 138.1 667.499 138.5 668.099 138.9C668.899 139.3 669.599 139.9 670.299 140.3C671.599 141.2 672.899 142.1 674.299 143Z"
          fill="white"
        />
        <path
          d="M447.003 73.7C446.303 76.7 446.003 79.5999 443.703 81.6999C441.603 83.6999 439.403 85.6999 437.303 87.7999C436.803 88.2999 436.203 88.8999 435.803 89.3999C434.203 91.2999 434.303 93.1999 435.703 94.7999C437.403 96.6999 439.103 98.6999 440.903 100.5C443.003 102.6 444.903 104.8 446.103 107.6C446.703 109 446.603 109.9 445.603 111C445.103 111.5 444.503 111.7 443.803 111.6C440.903 111.2 438.503 109.7 436.403 107.9C434.903 106.6 435.203 105.1 436.903 104.1C437.103 104 437.303 104 437.403 103.9C438.603 103.3 438.703 102.8 438.003 101.7C437.203 100.6 436.403 99.4999 435.503 98.3999C433.503 95.7999 431.403 93.0999 429.403 90.4999C429.103 90.1999 428.903 89.7999 428.703 89.3999C428.303 88.7999 428.403 88.2999 428.903 87.8999C429.303 87.4999 429.803 87 430.303 86.6C431.903 85.3 433.503 84 435.103 82.6C436.103 81.7 436.103 80.7999 435.003 79.9999C433.803 78.9999 432.603 78 431.303 77.1C427.603 74.4 427.303 69.9999 428.603 66.4999C429.203 64.9999 430.003 63.6999 431.303 62.6999C433.003 61.4999 435.003 61.1999 437.003 61.3999C441.603 61.9999 444.203 65.1999 445.803 69.1999C446.303 70.6999 446.603 72.3 447.003 73.7ZM442.803 70.7999C442.703 68.3999 441.903 66.9999 440.303 65.9999C439.503 65.4999 438.703 65.4999 437.803 65.8999C435.803 66.9999 434.303 68.5 433.303 70.6C432.803 71.8 432.703 72.8999 433.303 73.9999C433.703 74.6999 433.903 75.5 434.303 76.2C434.903 77.0999 435.703 77.9999 436.503 78.6999C437.203 79.2999 438.103 79.0999 438.703 78.3999C439.603 77.2999 440.503 76.1999 441.103 74.9999C441.903 73.4999 442.403 71.8999 442.803 70.7999Z"
          fill="white"
        />
        <path
          d="M308.8 786.8C310.2 787 311.6 787.3 313 787.4C316 787.6 318.1 785.9 319.9 783.8C321.4 782.1 321.3 780.4 320 778.5C319 777 317.8 776 315.8 776.2C314.6 776.4 313.7 776.9 313.2 778C311.8 780.9 307.9 781.2 306.1 778.5C304.8 776.6 304 774.7 305.1 772.4C305.5 771.5 306.1 770.8 307 770.5C307.8 770.2 308.7 769.9 309.5 769.7C311 769.2 311.4 768.9 311.2 767.3C311 765.4 310.5 763.6 310.2 761.8C309.7 759.3 309.2 756.9 308.6 754.5C308.3 753.1 308.8 752 310 751.6C311.4 751.1 312.4 751.5 313.1 752.9C313.6 754 313.9 755.2 314 756.3C314.1 758.1 314 759.9 314 761.7C314.1 764 314.2 766.3 314.3 768.6C314.4 769.5 314.8 770.3 315.7 770.6C319.3 771.7 321 774.6 322.5 777.7C323.3 779.5 323.8 781.5 324.3 783.4C324.9 786 323.3 789.5 321.1 790.9C320.4 791.3 319.7 791.7 319 792.1C317.5 792.9 317.3 793.4 318 794.9C318.4 795.9 318.9 797 319.1 798.1C319.7 800.8 319 803.3 317 805.2C316 806.1 314.4 806.7 312.9 806.9C309.5 807.5 306.2 806.9 303.2 804.9C302.7 804.6 302.2 804.3 301.7 804.2C299.9 803.9 299.2 802.5 298.8 801.1C298.5 799.9 298.5 798.5 298.5 797.2C298.5 796 300 795.4 301.1 796C301.4 796.2 301.6 796.4 301.8 796.6C302.7 798.4 304.6 799.1 306.1 800.1C308 801.3 312 800.8 313.8 799.3C315 798.3 315.5 796.9 315.4 795.3C315.3 794.1 314.5 793.4 313.1 793.1C311.3 792.7 309.4 792.3 307.6 792C306.5 791.8 305.9 791.3 305.7 790.3C305.5 789.6 305.3 788.8 305 788.1C304.7 787.2 304.8 786.5 305.5 785.9C306.1 785.3 306.9 785.5 307.6 785.9C308 786.1 308.4 786.3 308.8 786.5C308.8 786.7 308.8 786.8 308.8 786.8Z"
          fill="white"
        />
        <path
          d="M111.2 613.4C112.4 612.9 114 611.8 115.6 611.7C118.4 611.6 121.3 611.1 124.1 612.2C127.1 613.4 129.5 615.5 130.8 618.5C132.8 623 133 627.6 131 632.3C129.1 636.5 126.5 640.1 123.6 643.6C121.8 645.8 119.6 647.5 117.5 649.4C116.7 650.1 115.9 650.8 115 651.4C114.3 651.8 113.5 652.3 112.8 651.6C112.3 651.2 112.5 649.8 113.1 649C113.4 648.7 113.7 648.4 114.1 648.1C117.1 646.2 119.3 643.5 121.7 640.9C123.6 638.7 125 636.3 126.3 633.6C127.2 631.7 127.5 629.8 127.4 627.8C127.3 624.3 126 621.4 122.9 619.4C120.7 618 118.3 617.5 115.7 617.7C114.9 617.8 114.8 618.3 114.9 618.9C115 619.4 115.3 619.9 115.6 620.4C117.8 623.7 118.1 627.5 117.8 631.3C117.5 635.1 113.9 638.2 110 638.4C107.5 638.5 105.9 637.2 104.3 635.6C102.5 633.8 101.2 631.7 101.5 628.9C101.6 627.9 101.5 626.9 101.5 625.9C101.5 623.8 102.1 622 103.1 620.2C104 618.5 105.2 617.3 106.8 616.4C108.3 615.6 109.5 614.6 111.2 613.4ZM104.9 628.7C105.9 630.2 107.3 630.7 109.1 630.8C110.7 630.9 111.8 630.4 112.5 629C112.8 628.4 113.2 627.9 113.4 627.4C113.9 626.3 114.4 625.1 114.1 623.8C113.9 622.8 113.6 621.9 113.4 620.9C113 619.6 112.6 619.4 111.4 619.6C108.2 620.2 106.1 622.1 104.8 625C104.1 626.4 104.4 627.6 104.9 628.7Z"
          fill="white"
        />
        <path
          d="M449.202 180.5C449.202 186.8 444.102 191.9 437.802 191.9C431.502 191.9 426.402 186.8 426.402 180.5C426.402 174.2 431.502 169.1 437.802 169.1C444.102 169.1 449.202 174.2 449.202 180.5Z"
          fill="white"
        />
        <path
          d="M448.957 183.334C450.404 177.206 446.61 171.066 440.482 169.619C434.355 168.173 428.215 171.967 426.768 178.094C425.321 184.221 429.116 190.361 435.243 191.808C441.37 193.255 447.51 189.461 448.957 183.334Z"
          stroke="#010202"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M278.5 234.9C282.6 239.7 281.9 246.9 277.1 251C272.3 255.1 265.1 254.4 261 249.6C256.9 244.8 257.6 237.6 262.4 233.5C267.3 229.5 274.5 230.1 278.5 234.9Z"
          fill="white"
        />
        <path
          d="M278.5 234.9C282.6 239.7 281.9 246.9 277.1 251C272.3 255.1 265.1 254.4 261 249.6C256.9 244.8 257.6 237.6 262.4 233.5C267.3 229.5 274.5 230.1 278.5 234.9Z"
          stroke="#010202"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M697.199 408.4C690.999 409.5 685.099 405.3 683.999 399.1C682.899 392.9 687.099 387 693.299 385.9C699.499 384.8 705.399 389 706.499 395.2C707.599 401.4 703.399 407.3 697.199 408.4Z"
          fill="white"
        />
        <path
          d="M697.199 408.4C690.999 409.5 685.099 405.3 683.999 399.1C682.899 392.9 687.099 387 693.299 385.9C699.499 384.8 705.399 389 706.499 395.2C707.599 401.4 703.399 407.3 697.199 408.4Z"
          stroke="#010202"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M614.602 249.599C610.502 254.399 603.302 255.099 598.502 250.999C593.702 246.899 593.002 239.699 597.102 234.899C601.202 230.099 608.402 229.399 613.202 233.499C618.002 237.599 618.602 244.799 614.602 249.599Z"
          fill="white"
        />
        <path
          d="M614.602 249.599C610.502 254.399 603.302 255.099 598.502 250.999C593.702 246.899 593.002 239.699 597.102 234.899C601.202 230.099 608.402 229.399 613.202 233.499C618.002 237.599 618.602 244.799 614.602 249.599Z"
          stroke="#010202"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M658.5 583.099C653 579.899 651.2 572.999 654.3 567.499C657.5 561.999 664.4 560.199 669.9 563.299C675.4 566.499 677.2 573.399 674.1 578.899C670.9 584.399 663.9 586.299 658.5 583.099Z"
          fill="white"
        />
        <path
          d="M658.5 583.099C653 579.899 651.2 572.999 654.3 567.499C657.5 561.999 664.4 560.199 669.9 563.299C675.4 566.499 677.2 573.399 674.1 578.899C670.9 584.399 663.9 586.299 658.5 583.099Z"
          stroke="#010202"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M516.502 691.999C514.302 686.099 517.402 679.5 523.302 677.4C529.202 675.2 535.802 678.3 537.902 684.2C540.102 690.1 537.002 696.7 531.102 698.8C525.202 701 518.602 697.999 516.502 691.999Z"
          fill="white"
        />
        <path
          d="M516.502 691.999C514.302 686.099 517.402 679.5 523.302 677.4C529.202 675.2 535.802 678.3 537.902 684.2C540.102 690.1 537.002 696.7 531.102 698.8C525.202 701 518.602 697.999 516.502 691.999Z"
          stroke="#010202"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M337.701 684.2C339.901 678.3 346.401 675.2 352.301 677.4C358.201 679.6 361.301 686.099 359.101 691.999C356.901 697.899 350.401 701 344.501 698.8C338.601 696.7 335.501 690.2 337.701 684.2Z"
          fill="white"
        />
        <path
          d="M337.701 684.2C339.901 678.3 346.401 675.2 352.301 677.4C358.201 679.6 361.301 686.099 359.101 691.999C356.901 697.899 350.401 701 344.501 698.8C338.601 696.7 335.501 690.2 337.701 684.2Z"
          stroke="#010202"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M205.701 563.3C211.201 560.1 218.201 562 221.301 567.5C224.501 573 222.601 580 217.101 583.1C211.601 586.3 204.601 584.4 201.501 578.9C198.401 573.5 200.301 566.5 205.701 563.3Z"
          fill="white"
        />
        <path
          d="M205.701 563.3C211.201 560.1 218.201 562 221.301 567.5C224.501 573 222.601 580 217.101 583.1C211.601 586.3 204.601 584.4 201.501 578.9C198.401 573.5 200.301 566.5 205.701 563.3Z"
          stroke="#010202"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M182.403 385.9C188.603 387 192.802 392.9 191.702 399.1C190.602 405.3 184.702 409.5 178.502 408.4C172.302 407.3 168.102 401.4 169.202 395.2C170.202 388.9 176.203 384.8 182.403 385.9Z"
          fill="white"
        />
        <path
          d="M182.403 385.9C188.603 387 192.802 392.9 191.702 399.1C190.602 405.3 184.702 409.5 178.502 408.4C172.302 407.3 168.102 401.4 169.202 395.2C170.202 388.9 176.203 384.8 182.403 385.9Z"
          stroke="#010202"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M437.802 493.7C461.002 493.7 480.601 478.7 487.701 457.9C489.201 453.5 490.102 448.9 490.402 444.1C490.502 443.1 490.501 442 490.501 440.9C490.501 411.8 466.902 388.2 437.802 388.2C408.702 388.2 385.102 411.8 385.102 440.9C385.102 457.8 393.002 472.8 405.402 482.4C411.802 487.4 419.402 491 427.802 492.6C431.002 493.4 434.402 493.7 437.802 493.7Z"
          fill="#010202"
        />
        <path
          d="M437.802 403.5L441.902 416.1C443.102 419.8 447.502 421.4 450.802 419.3L462.002 412.3L457.002 424.5C455.502 428.1 457.902 432.2 461.702 432.7L474.802 434.5L463.102 440.7C459.602 442.5 458.802 447.1 461.502 450L470.402 459.8L457.502 457C453.702 456.2 450.102 459.2 450.202 463.1L450.702 476.3L442.602 465.9C440.202 462.8 435.502 462.8 433.102 465.9L425.002 476.3L425.502 463.1C425.602 459.2 422.102 456.2 418.202 457L405.302 459.8L414.202 450C416.802 447.1 416.002 442.5 412.602 440.7L400.902 434.5L414.002 432.7C417.902 432.2 420.202 428.1 418.702 424.5L413.702 412.3L424.902 419.3C428.202 421.4 432.602 419.8 433.802 416.1L437.802 403.5Z"
          fill="white"
        />
        {!withoutGreenPath && (
          <path
            ref={greenPath}
            d="M437.801 182.399L526.501 686.199L271.101 243.699L662.501 572.099L182.301 397.399H693.301L213.101 572.099L604.501 243.699L349.101 686.199L437.801 182.399Z"
            stroke="#66B32E"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="greenPath"
            onAnimationEnd={handleFinish}
          />
        )}
      </svg>
    </>
  );
}
