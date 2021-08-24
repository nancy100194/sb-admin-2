export default function Sidebar(){
  return(
      <>
           
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

         
          <span class="sidebar-brand d-flex align-items-center justify-content-center">
              <div class="sidebar-brand-icon rotate-n-15">
                  <i class="fas fa-laugh-wink"></i>
              </div>
              <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
          </span>

          
          <hr class="sidebar-divider my-0"/>

         
          <li class="nav-item active">
              <span class="nav-link">
                  <i class="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span></span>
          </li>

          
          <hr class="sidebar-divider"/>

         
          <div class="sidebar-heading">
              Interface
          </div>

          
          <li class="nav-item">
              <span class="nav-link collapsed"  data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="true" aria-controls="collapseTwo">
                  <i class="fas fa-fw fa-cog"></i>
                  <span>Components</span>
              </span>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                      <h6 class="collapse-header">Custom Components:</h6>
                      <span class="collapse-item" >Buttons</span>
                      <span class="collapse-item" >Cards</span>
                  </div>
              </div>
          </li>

          
          <li class="nav-item">
              <span class="nav-link collapsed"  data-toggle="collapse" data-target="#collapseUtilities"
                  aria-expanded="true" aria-controls="collapseUtilities">
                  <i class="fas fa-fw fa-wrench"></i>
                  <span>Utilities</span>
              </span>
              <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                  data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                      <h6 class="collapse-header">Custom Utilities:</h6>
                      <span class="collapse-item" >Colors</span>
                      <span class="collapse-item" >Borders</span>
                      <span class="collapse-item" >Animations</span>
                      <span class="collapse-item" >Other</span>
                  </div>
              </div>
          </li>

          
          <hr class="sidebar-divider"/>

         
          <div class="sidebar-heading">
              Addons
          </div>

        
          <li class="nav-item">
              <span class="nav-link collapsed"  data-toggle="collapse" data-target="#collapsePages"
                  aria-expanded="true" aria-controls="collapsePages">
                  <i class="fas fa-fw fa-folder"></i>
                  <span>Pages</span>
              </span>
              <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                      <h6 class="collapse-header">Login Screens:</h6>
                      <span class="collapse-item" >Login</span>
                      <span class="collapse-item" >Register</span>
                      <span class="collapse-item" >Forgot Password</span>
                      <div class="collapse-divider"></div>
                      <h6 class="collapse-header">Other Pages:</h6>
                      <span class="collapse-item" >404 Page</span>
                      <span class="collapse-item" >Blank Page</span>
                  </div>
              </div>
          </li>

         
          <li class="nav-item">
              <span class="nav-link" >
                  <i class="fas fa-fw fa-chart-area"></i>
                  <span>Charts</span></span>
          </li>

         
          <li class="nav-item">
              <span class="nav-link" >
                  <i class="fas fa-fw fa-table"></i>
                  <span>Tables</span></span>
          </li>

          
          <hr class="sidebar-divider d-none d-md-block"/>

          
          <div class="text-center d-none d-md-inline">
              <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>

          
          <div class="sidebar-card">
              <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt=""/>
              <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
              <span class="btn btn-success btn-sm" >Upgrade to Pro!</span>
          </div>

      </ul>
     
      </>
  )
}