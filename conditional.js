var grade=prompt("enter any upper acse alphabet:","A")

document.write("entering switch block<br>");

switch(grade)
{

  case 'A':
    document.write("good job<br>");
    case 'B':
        document.write("bad job<br>");
        case 'C':
            document.write("worst job<br>");
            case 'D':
                document.write("lauda job<br>");
                case 'E':
                document.write("failed");
                default:
                    document.write("unknown grade<br>");
}
document.write("exiting switch block");